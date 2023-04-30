import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import Post_card from "../components/Post_card";

function Post() {
  const [posts, setpost] = useState([]);
  const [menu, setmenu] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/MyPost",
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
      url: "http://172.20.10.4:5174/api/MyPostmenu",
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
        My Order
      </div>
      <div className=" my-14">
        <button  href="/" className="fixed z-50 top-20 right-10 sm:right-6 border-t-4 font-bold border-b-4 border-r-4 border-orange-600 bg-amber-400 w-10 h-10  rounded-r-2xl  flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
      <a href="/">
          <FiBell />
      </a>
        </button>
      <a href="/">
        <button className="fixed z-50 top-20 right-20 sm:right-16 border-4 font-bold border-orange-600 bg-amber-400 w-10 h-10 rounded-l-2xl   flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
          <FiDownload />
        </button>
      </a>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-20">
        {
          posts.map((post, index) => 
          {
            console.log(post);
            console.log(menu);
            return(<Post_card post={post} menu={menu} />)
          })
        }
        
      </div>
      
    </div>
  );
}

export default Post;

