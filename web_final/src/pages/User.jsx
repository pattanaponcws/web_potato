import axios from "axios";
import React, { useEffect, useState } from "react";
import Password from "../components/Password";

const User = () => {
  // const pwShow = document,querySelector(".show"),createPW = document,querySelector("#password"),confirmPW = document,querySelector("#confirm-password")
  // pwShow.addEventListener("click",()=>{})
  const [user, setuser] = useState([]);
  const [spaceCheck, setSpacecheck] = useState(false);
  const [password,setpassword] = useState("");
  const [confirmpassword,setconfirmpassword] = useState("");
  const [displayname,setdisplayname] = useState("");
  const[showConfirm,setShowconfirm]=useState(false);
  const handleOnClose = () => setShowconfirm(false);

  const fetchData = () => {
    axios({
      method: "get",
      url: "http://172.20.10.4:5174/api/userJWT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setuser(response.data);
        setdisplayname(response.data.displayname)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-screen  min-h-screen bg-repeat-y bg-cover pb-20  bg-base1 font-prom">
      <div className="pt-[100px] flex flex-col justify-center items-center ">
        <div className="z-40">
          <button className="font-bold rounded-md bg-orange-600 text-[30px]  text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center ">
            Account Setting
          </button>
        </div>
        <div className="flex flex-col z-40">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5 text-left"
            for="first-name"
          />
          Username
          <input
            className={`shadow appearance-none border rounded-lg w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
               spaceCheck ?"":"" //"border-2  border-red-500" : ""
            }`}
            id="username"
            type="text"
            value={user.username}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="display-name"
          />
          Display Name
          <input
            className="shadow appearance-none border rounded-lg w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="displayname"
            type="text"
            value={displayname}
            onChange={(e) => {
              if (e.target.value[e.target.value.length - 1] == " ") {
                setSpacecheck(true);
              } else {
                setdisplayname(e.target.value);
                console.log(e.target.value);
              }
            }}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="email"
          />
          Email
          <input
            className="shadow appearance-none border rounded-lg w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            value={user.email}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="password"
          />
          Password
          <input
            className="shadow appearance-none border rounded-lg w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="new password"
            onChange={e=>setpassword((x)=>e.target.value)}
            
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5"
            for="password"
          />
          Comfirm Password
          <input
            className="shadow appearance-none border rounded-lg w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="confirm password"
            onChange={e=>setconfirmpassword((x)=>e.target.value)}
          />
        </div>
        <div className="pt-10">
          <button className="font-bold rounded-lg bg-orange-600 text-[20px] text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center "
           onClick={()=>{
            if(password==confirmpassword)
              return setShowconfirm(true)
            else
              window.alert('รหัสไม่ตรงโว้ยยยยย')
           }}
           >
            Save
          </button>
        </div>
      </div>
      <div>
        <Password 
         password={password==""?user.password:password}
         userpassword={user.password}
         displayname={displayname}
         onClose={handleOnClose}
         visible={showConfirm}/> 
      </div>
      <div className="">
        <img className="animate-[movingUpandDown_2s_ease-in-out_1s_infinite] z-0    absolute top-20 -left-80 h-[80vh] blur-md " src="./src/assets/re/Ellipse28.png" />
        <img className="animate-[movingUpandDown_5s_ease-in-out_1s_infinite] z-0 invisible md:visible  absolute top-20 left-[60vw] h-[20vh] blur-md" src="./src/assets/re/Ellipse28.png" />
        <img className="animate-[movingUpandDown_3s_ease-in-out_1s_infinite] z-0 invisible md:visible  absolute bottom-20 right-[2rem] h-[20vh] blur-md" src="./src/assets/re/Ellipse28.png" />
      </div>
    </div>
  );
};

export default User;
