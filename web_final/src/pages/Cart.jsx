import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
import Checkout from "../components/Checkout";

function Cart() {
  document.title = "Cart";
  const [cart, setcart] = useState([]);
  const [restslsit, setRestslsit] = useState([]);
  const [menulsit, setMenulsit] = useState([]);
  const [showCheck, setShowCheck] = useState(false);
  const handleOnClose = () => setShowCheck(false);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/GetCart",
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
      url: "https://localhost:7057/api/restaurants",
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
      url: "https://localhost:7057/api/menus",
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
  }, []);

  function remove(id) {
    axios({
      method: "delete",
      url: "https://localhost:7057/api/Remove?id=" + String(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        window.location.reload(false);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="p-9 w-screen h-screen bg-base bg-cover  ">
      <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Cart
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 ">
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
              <div className="flex justify-center flex-col bg-amber-100 rounded-2xl font-semibold">
                <img
                  className=" h-40 w-full object-cover rounded-t-xl overflow-hidden"
                  src={rest.restPic}
                  alt={rest.restName}
                />
                <div className="flex justify-center pt-2 text-sm sm:text-lg">
                  {rest.restName}
                </div>
                <div className=" ">
                  <div className="divide-y-2 divide-dashed divide-black">
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
                      else
                        return (
                          <div className="flex flex-row justify-between mx-10 text-sm sm:text-lg p-2">
                            <div className="flex">
                              <div>{count} x</div>
                              <div className="mx-2">{index.menuFood}</div>
                            </div>
                            <div className=" text-orange-500">
                              {index.priceFood * count}
                            </div>
                          </div>
                        );
                    })}

                    <div className=" flex flex-col sm:flex-row justify-between mx-10  p-1 text-sm sm:text-lg">
                      <div>Total Amount :</div>
                      <div>{total} บาท</div>
                    </div>
                  </div>
                  <div className="flex justify-center text-2xl text-orange-600 p-2">
                    <button onClick={() => remove(rest.restId)}>
                      <HiTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      <div className="flex justify-center pt-5">
        <button
          type="button"
          className="fixed z-90 bottom-10 py-2 px-5 bg-amber-100 hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
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
      />
    </div>
  );
}

export default Cart;
