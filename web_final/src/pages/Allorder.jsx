import React, { useEffect, useState } from "react";
import axios from "axios";
import Allorder_card from "../components/Allorder_card";
function Allorder() {
  const [posts, setpost] = useState([]);
  const [menu, setmenu] = useState([]);
  const [reload, setreload] = useState(0);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setpost(response.data);
        //console.log(response.data);
      })
      

    axios({
      method: "get",
      url: "https://localhost:7057/api/PostMenu",
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
  }, [reload]);
  return (
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20">
      <div className=" pt-24 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        All Order
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-10 pt-10 ">
        {posts.map((item, inxdex) => {
          if (item.status=="use")
          return <Allorder_card item={item} menu={menu} setreload={setreload}/>;
        })}
      </div>
    </div>
  );
}

export default Allorder;
