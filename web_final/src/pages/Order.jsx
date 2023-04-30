import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Alert from "../components/Alert";
import Swal from "sweetalert2";

function Order(props) {
  const [m, setM] = useState("");
  const [push, setPush] = useState("");
  document.title = "Order11";
  const params = useParams();

  const [menus, setMenu] = useState([]);

  const fetchOrder = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/menus/rest/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (push) {
    setTimeout(() => {
      setPush(false);
    }, 5000);
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div class="w-screen  bg-base min-h-screen bg-repeat-y bg-cover pb-20 font-mali">
      <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Menu
      </div>
      <div className="">
        <div class="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-40">
          {menus.map((menu, index) => (
            <Menu
              menu={menu}
              index={index}
              reload={props.reload}
              setM={setM}
              setPush={setPush}
            />
          ))}
        </div>
      </div>
      {push ? (
        <div className={` fixed  bottom-2 right-1 ${push?" animate-bounce transition -translate-y-10 duration-1000":""}`}>
          <div className="">
            <Alert m={m} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Order;
