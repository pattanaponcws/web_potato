import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import Swal from "sweetalert2";
function Checkout({ visible, onClose, cart, restslsit, menulsit, reload }) {
  const [tel, setTel] = useState([]);
  const [address, setAddress] = useState([]);
  const [addnone, setAddnone] = useState(true);
  const [phonenone, setPhonenone] = useState(true);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

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
        reload[1]((x) => x + 1);
        //window.location.reload(false);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sendData = () => {
    {
      !addnone && !phonenone
        ? restslsit.map((rest, index) => {
            const data = cart.filter(
              (x) => x.menu.restaurants.restId == rest.restId
            );
            if (data.length == 0) return;
            let foodlist = [];
            const New_menulsit = menulsit.filter(
              (x) => x.restaurants.restId == rest.restId
            );
            New_menulsit.map((menu, i) => {
              const temp = data.filter((x) => x.menu.menuId == menu.menuId);
              let count = 0;

              for (let index = 0; index < temp.length; index++) {
                count += temp[index].countFood;
              }
              if (count > 0) {
                const data1 = {
                  numFood: count,
                  menuId: String(menu.menuId),
                };
                foodlist.push(data1);
              }
            });
            const data2 = JSON.stringify({
              tel: tel,
              address: address,
              restaurants: rest.restId,
              foodlist: foodlist,
            });

            axios({
              method: "post",
              url: "http://172.20.10.4:5174/api/Post",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: data2,
            }).then((response) => {});
            remove(rest.restId);
          })
        : Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Your input is incorrect!!",
          });
    }
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center z-50 font-prom"
    >
      <div className="bg-white p-2 rounded">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-orange-600 p-2">
            Confirm Check Out
          </h1>
          <div className="flex flex-col">
            <input
              value={address}
              type="text"
              maxLength={10}
              className="border border-orange-500 p-2 rounded mb-5"
              onChange={(x) => {
                setAddress((y) => x.target.value);
                if (x.target.value != "") {
                  setAddnone(false);
                }else{
                  setAddnone(true)
                }
              }}
              placeholder="Enter Address"
            />
            <input
              value={tel}
              type="text"
              maxLength={10}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="border border-orange-500 p-2 rounded mb-5"
              onChange={(x) => {
                setTel((y) => x.target.value);
                if (x.target.value != "" || x.target.value.length < 10) {
                  setPhonenone(false);
                }else{
                    setPhonenone(true)
                  }
                }
              }
              placeholder="Enter Telephone"
            />
          </div>
          <div className="text-center">
            <button
              className={`px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 `}
              onClick={() => {
                sendData();
                onClose();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
