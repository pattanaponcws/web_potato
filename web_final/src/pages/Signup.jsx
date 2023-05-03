import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  document.title = "Sing up";
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    con_password: "",
  });
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [error, setError] = useState(false);

  const toggle1 = () => {
    setOpen1(!open1);
  };
  const toggle2 = () => {
    setOpen2(!open2);
  };

  const confirmSignUp = () => {
    if (username == "" || email == "" || password == "" || con_password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    if (password != con_password) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Try again,Confirm Password is not Match",
      });
      return;
    }

    console.log(state);
    axios({
      method: "POST",
      url: "http://172.20.10.4:5174/api/Signup",
      headers: { "Content-Type": "application/json" },
      data: state,
    })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Success",
        });
        window.location.replace("http://172.20.10.4:5173/Login");
      })
      .catch(function (response) {
        console.log(response);
        Swal.fire({
          icon: "warning",
          title: "Error!!",
          text: "Please try another username or password.",
        });
      });
  };

  const { email, username, password, con_password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
    if (name == "email") {
      if (
        event.target.value.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )
      ) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className=" pb-10 w-screen h-screen bg-amber-100 bg-cover flex justify-center items-center font-prom">
      <div className="bg-amber-300  bg-opacity-60 w-[30rem] p-6 sm:p-16  rounded-2xl z-10">
        <div className=" flex justify-between pb-7">
          <div>
            <div className=" flex text-xl font-bold gap-2 pb-1">
              <h2 className="animate__animated animate__fadeInDown">🥔</h2>
              <h2 className="animate__animated animate__fadeInDown">Potato</h2>
            </div>
            <h1 className="animate__animated animate__fadeInDown animate__delay-0.5s text-3xl sm:text-5xl font-bold">
              Sign up
            </h1>
          </div>
        </div>
        <form className=" space-y-3 pb-4">
          <div className="animate__animated animate__fadeInDown">
            <div className=" text-sm text-gray-700 font-semibold pb-2">
              Email
            </div>
            <input
              type="email"
              className="w-full rounded-lg p-2"
              value={email}
              onChange={inputValue("email")}
              required
            ></input>
            {error ? <p className="text-red-600">Enter valid Email</p> : ""}
          </div>
          <div className="animate__animated animate__fadeInDown">
            <div className=" text-sm text-gray-700 font-semibold pb-2">
              Username
            </div>
            <input
              className="w-full rounded-lg p-2"
              type="text"
              value={username}
              onChange={inputValue("username")}
              required
            ></input>
          </div>
          <div className="relative">
            <div className="animate__animated animate__fadeInDown">
              <div className="flex justify-between pb-2">
                <div className=" text-sm text-gray-700 font-semibold">
                  Password
                </div>
              </div>
              <input
                className="w-full rounded-lg p-2"
                type={open1 === false ? "password" : "text"}
                onChange={inputValue("password")}
                value={password}
                required
              ></input>

              <div className="absolute right-1 top-10 text-xl opacity-50 hover:cursor-pointer">
                {open1 === false ? (
                  <AiFillEye onClick={toggle1} />
                ) : (
                  <AiFillEyeInvisible onClick={toggle1} />
                )}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="animate__animated animate__fadeInDown">
              <div className="flex justify-between pb-2">
                <div className=" text-sm text-gray-700 font-semibold">
                  Confirm Password
                </div>
              </div>
              <input
                className="w-full rounded-lg p-2"
                type={open2 === false ? "password" : "text"}
                onChange={inputValue("con_password")}
                value={con_password}
                required
              ></input>
              <div className="absolute right-1 top-10 text-xl opacity-50 hover:cursor-pointer">
                {open2 === false ? (
                  <AiFillEye onClick={toggle2} />
                ) : (
                  <AiFillEyeInvisible onClick={toggle2} />
                )}
              </div>
            </div>
          </div>
        </form>
        <button
          className="flex justify-center items-center bg-black rounded-lg 
            text-white py-3 px-12 animate__animated animate__zoomIn"
          onClick={confirmSignUp}
        >
          Create account
        </button>
      </div>
      <div>
        <img
          className=" invisible md:visible animate-[popUp_3s] md:absolute w-[264px] -left-[10vw] -top-[97px] "
          src="./src/assets/home/Ellipse7.png"
        />
        <img
          className=" animate-[popUp_3s] md:visible absolute top-[10vh] w-28 right-[10vw]"
          src="./src/assets/home/Ellipse7.png"
        />
        <img
          className="z-0 bottom-0 animate-[popUp_3s] md:visible absolute w-[50vw] right-10 opacity-90"
          src="./src/assets/home/Ellipse10.png"
        />
        <img
          className=" invisible md:visible animate-[popUp_3s] md:absolute w-[100px] left-[8vw] bottom-[200px] "
          src="./src/assets/home/Ellipse11.png"
        />
      </div>
    </div>
  );
};

export default Signup;
