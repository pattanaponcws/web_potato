import React, { useEffect, useState } from "react";
import axios from "axios";
import Allorder_card from "../components/Allorder_card";
function Allorder() {
  const [posts, setpost] = useState([]);
  const [menu, setmenu] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/GetPost",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setpost(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: "get",
      url: "https://localhost:7057/api/GetPostMenu",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setmenu(response.data);

        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20">
      <div className=" pt-24 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        All Order
      </div>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 pt-10 ">
        {posts.map((item, inxdex) => {
          return <Allorder_card item={item} menu={menu}/>;
        })}
      </div>
    </div>
  );
}

export default Allorder;
