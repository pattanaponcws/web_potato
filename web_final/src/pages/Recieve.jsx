import React, { useEffect, useState } from "react";
import axios from "axios";
import Recieve_card from "../components/Receive_card";
import { BiChevronLeftCircle } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

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
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20 font-prom">
       <div className=" pt-20  flex justify-center text-center">
       <div className=" bg-orange-600 text-white text-2xl  w-52 p-2 rounded-xl">Receiving Order</div>
       
     </div>
     <div className="text-center text-lg pt-3">คำสั่งซื้อที่รับมา</div> 
      <div className=" my-14">
        <button  href="/" className="fixed z-20 top-20 right-10 sm:right-6 border-t-4 font-bold border-b-4 border-r-4 border-orange-600 bg-amber-400 w-10 h-10  rounded-r-2xl  flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
      <a href="/Post">
          <FiBell />
      </a>
        </button>
      <a href="/Receive">
        <button className="fixed z-20 top-20 right-20 sm:right-16 border-4 font-bold border-orange-600 bg-amber-400 w-10 h-10 rounded-l-2xl   flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
          <FiDownload />
        </button>
      </a>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-10  ">
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
