import React, { useEffect, useState } from "react";
import axios from "axios";
import Recieve_card from "../components/Receive_card";
import { BiChevronLeftCircle } from "react-icons/bi";
function Recieve() {
  const [menu, setmenu] = useState([]);
  const [accept, setaccept] = useState([]);
  const [reload, setreload] = useState(0);
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/Accept",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      setaccept(response.data);
      console.log(response.data);
    });


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

  useEffect(() => {
    fetchData();
  }, [reload]);
  return (
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20">
      <div className=" pt-24 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Receiving Order
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-10 pt-10 ">
        {accept.map((a,index) => {
          return (<Recieve_card menu={menu} accept={a} setreload={setreload}/>);
        })}
      </div>
      <a href="/Sel">
              <button className="fixed z-90 bottom-10 left-8 bg-amber-400 w-10 sm:w-14 h-10 sm:h-14 rounded-full flex justify-center items-center text-white text-2xl sm:text-4xl hover:bg-orange-600  duration-300">
                <BiChevronLeftCircle />
              </button>
            </a>
    </div>
    
  );
}

export default Recieve;
