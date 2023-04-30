import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
import Checkout from "../components/Checkout";
import Post_card from "../components/Post_card";

function Cart(props) {
  document.title = "Cart";
  const [cart, setcart] = useState([]);
  const [restslsit, setRestslsit] = useState([]);
  const [menulsit, setMenulsit] = useState([]);
  const [showCheck, setShowCheck] = useState(false);
  const [listnull, setListnull] = useState(true);
  const handleOnClose = () => setShowCheck(false);
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/Cart",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setcart(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchData1 = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/restaurants",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setRestslsit(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchData2 = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/menus",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setMenulsit(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
  }, [props.reload[0]]);

  function remove(id) {
    axios({
      method: "delete",
      url: "http://172.20.10.4:5174/api/Cart/" + String(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        props.reload[1]((x) => x + 1);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(cart);
  return (
    <div className="w-screen  bg-base min-h-screen bg-repeat-y bg-cover pb-20 font-mali ">
      <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Cart
      </div>
      {cart.length == 0 ? (
        <div className="w-screen text-center text-3xl  p-40">
          Cart none
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-[50px] lg:px-36">
        {restslsit.map((rest, index) => {
          const data = cart.filter(
            (x) => x.menu.restaurants.restId == rest.restId
          );
          //console.log(rest.restId+' * '+cart[0].menu.restaurants.restId);
          //console.log(data)
          let total = 0;
          for (let index = 0; index < data.length; index++) {
            total += data[index].price;
          }
          if (data.length == 0) return null;
          else
            return (
              <div className="flex justify-center font-mali ">
                <div className="bg-amber-100 rounded-2xl w-80 relative pb-24">
                  <img className=" rounded-t-2xl" src={rest.restPic} />
                  <div>
                    <h2 className="text-center text-lg sm:text-xl pt-2">
                      {rest.restName}
                    </h2>
                    <ul className="text-center p-4">
                      {menulsit.map((index, i) => {
                        const temp = data.filter(
                          (x) => x.menu.menuId == index.menuId
                        );
                        //console.log(temp);
                        let count = 0;
                        for (let index = 0; index < temp.length; index++) {
                          count += temp[index].countFood;
                        }
                        if (temp.length == 0) return null;
                        else {
                          return (
                            <div className="flex flex-row justify-between items-start md:items-center gap-x-3">
                              <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                                <div
                                  className=" text-left md:text-center
                                "
                                >
                                  {count}X
                                </div>
                                <div className=" text-left md:text-center">
                                  {index.menuFood}
                                </div>
                              </div>
                              <div className="text-base sm:text-lg">
                                {index.priceFood * count} $
                              </div>
                            </div>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  <div className=" absolute w-full bottom-1">
                    <div className="flex justify-between  p-4 border-t-2 border-amber-500 border-dashed text-base sm:text-lg ">
                      <div>Total Amount :</div>
                      <div>{total}$</div>
                    </div>
                    <div className="text-center text-2xl text-orange-500 ">
                      <button>
                        <HiTrash onClick={() => remove(rest.restId)} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      <div className="flex justify-center pt-16 bottom-2">
        <button
          type="button"
          className={` z-90 py-2 px-5 bg-orange-600 shadow-xl border-2 border-amber-200 hover:bg-amber-200 hover:text-orange-600  focus:ring-orange-600 focus:ring-offset-amber-200  text-amber-100  transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ${cart.length == 0?" invisible":" visible"}`}
          onClick={() => setShowCheck(true)}
        >
          <div className="text-sm md:text-xl">Check Out</div>
        </button>
      </div>
      <Checkout
        cart={cart}
        restslsit={restslsit}
        menulsit={menulsit}
        onClose={handleOnClose}
        visible={showCheck}
        reload={props.reload}
      />
    </div>
  );
}

export default Cart;
