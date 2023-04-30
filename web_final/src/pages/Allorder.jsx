import React, { useEffect, useState } from "react";
import axios from "axios";
import Allorder_card from "../components/Allorder_card";
import Alert from "../components/Alert";
function Allorder() {
  const [posts, setpost] = useState([]);
  const [m, setM] = useState("");
  const [text, setText] = useState("");
  const [menu, setmenu] = useState([]);
  const [reload, setreload] = useState(0);
  const [push, setPush] = useState("");
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/Post",
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
      url: "http://172.20.10.4:5174/api/PostMenu",
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
  if (push) {
    setTimeout(() => {
      setPush(false);
    }, 5000);
  }


  useEffect(() => {
    fetchData();
  }, [reload]);
  return (
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20 font-prom">
      <div className=" pt-24 font-semibold text-xl md:text-2xl lg:text-3xl flex justify-center">
        <div className=" bg-amber-600 text-center w-52 p-3 text-white rounded-full text-2xl">
        All Order

        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-10 pt-10 ">
        {posts.map((item, inxdex) => {
          if (item.status=="use")
          return <Allorder_card 
          item={item} 
          menu={menu} 
          setreload={setreload}
          setR={setM}
          setPush={setPush}
          setText={setText}
          />;
        })}
      </div>
      {push ? (
        <div className={` fixed  bottom-2 right-1 ${push?" animate-bounce transition -translate-y-10 duration-1000":""}`}>
          <div className="">
            <Alert m={m} text={text} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Allorder;
