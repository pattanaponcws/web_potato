import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { HiTrash } from "react-icons/hi";
import Card from "../components/Post_card";

function Post_card() {
  const [posts, setpost] = useState([]);
  const [menu, setmenu] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/GetMyPost",
      headers: { "Content-Type": "application/json" ,
      "Authorization":"Bearer "+localStorage.getItem('token')},
    })
      .then((response) => {
        setpost(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchData2 = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/GetMyMenu",
      headers: { "Content-Type": "application/json" ,
      "Authorization":"Bearer "+localStorage.getItem('token')},
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
    fetchData2();
  }, []);
  return (
    <div className="w-screen  bg-base min-h-screen bg-repeat-y bg-cover pb-20">
      <div className=" pt-20 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Post
      </div>
      <div className=" my-14">
      <a href="/">
        <button className="fixed z-90 top-20 right-10 sm:right-6 border-t-4 font-bold border-b-4 border-r-4 border-orange-600 bg-amber-400 w-10 h-10  rounded-r-2xl  flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
          <FiBell />
        </button>
      </a>
      <a href="/">
        <button className="fixed z-90 top-20 right-20 sm:right-16 border-4 font-bold border-orange-600 bg-amber-400 w-10 h-10 rounded-l-2xl   flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
          <FiDownload />
        </button>
      </a>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10">
        {
          posts.map((post, index) => 
          {

            return(<Card post={post} menu={menu} />)
          })
        }
        
      </div>
    </div>
  );
}

export default Post_card;
