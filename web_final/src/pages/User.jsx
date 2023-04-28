import axios from "axios";
import React, { useEffect, useState } from "react";
const User = () => {
  // const pwShow = document,querySelector(".show"),createPW = document,querySelector("#password"),confirmPW = document,querySelector("#confirm-password")
  // pwShow.addEventListener("click",()=>{})
  const [user, setuser] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/userJWT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setuser(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-screen h-screen bg-cover  bg-[url('https://sv1.picz.in.th/images/2023/04/27/ycNIzv.png')]">
      <div className="pt-[150px] flex flex-col justify-center items-center ">
        <div className="text-center">
          <button className="font-bold rounded-lg bg-orange-600 text-[30px] text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center ">
            Account Setting
          </button>
        </div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
          for="first-name"
        />
        Username :
        <input
          class="shadow appearance-none border rounded-2xl w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={user.username}
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
          for="display-name"
        />
        Display Name :
        <input
          class="shadow appearance-none border rounded-2xl w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={user.displayname==null?"":user.displayname}
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
          for="email"
        />
        Email :
        <input
          class="shadow appearance-none border rounded-2xl w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          value={user.email}
        />
         <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="password"
          />
          Password :
          <input
            class="shadow appearance-none border rounded-2xl w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={user.password}
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="password"
          />
          Comfirm Password :
          <input
            class="shadow appearance-none border rounded-2xl w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={user.password}
          />
          <div className="pt-10">
            <button className="font-bold rounded-lg bg-orange-600 text-[20px] text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center ">
              Save
            </button>
          </div>
        
      </div>
    
    </div>
  );
};

export default User;
