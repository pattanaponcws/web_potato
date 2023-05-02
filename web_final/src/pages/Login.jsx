import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import "animate.css";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const { username, password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
    if (state.password != "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      confirmLogin();
    }
  };

  const confirmLogin = () => {
    Swal.showLoading();
    console.log(state);
    let space = true;
    if (username.includes(" ", 0)) {
      space = false;
      console.log(space);
    }
    axios({
      method: "post",
      url: "http://172.20.10.4:5174/Auth/Authenticate",
      headers: { "Content-Type": "application/json" },
      data: state,
    })
      .then(function (response) {
        localStorage.setItem("token", response.data);
        //window.alert("Login Success");
        window.location.replace("http://172.20.10.4:5173/");
      })
      .catch(function (response) {
        console.log(response);
        console.log(space);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${
            !space ? "Username has space" : "Username or Password Incorrect"
          }`,
        });
      });
  };

  return (
    <div className="w-screen h-screen bg-log bg-cover font-prom">
      {/* {JSON.stringify(state)} */}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="z-40 flex flex-col items-center justify-center h-screen">
          <div className=" bg-amber-300  bg-opacity-60 w-[30rem] p-9 sm:p-16 rounded-2xl ">
            <div className=" flex justify-between pb-10">
              <div>
                <div className=" flex text-xl font-bold gap-2 pb-1">
                  <h2 className="animate__animated animate__fadeInDown">🥔</h2>
                  <h2 className="animate__animated animate__fadeInDown">
                    Potato
                  </h2>
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold animate__animated animate__fadeInDown">
                  Sign in
                </h1>
              </div>
              <div className="text-end text-sm font-medium text-cyan-700 hover:underline">
                <a href="/Signup">
                  {" "}
                  <p className="animate__animated animate__fadeInDown">
                    No account?
                  </p>
                  <p className="animate__animated animate__fadeInDown">
                    Sign up
                  </p>
                </a>
              </div>
            </div>
            <form className=" space-y-3 pb-4">
              <div className="animate__animated animate__fadeInDown">
                <div className=" text-sm text-gray-700 font-semibold pb-2">
                  Username or E-mail
                </div>
                <input
                  className="w-full rounded-lg p-2"
                  type="text"
                  value={username}
                  onChange={inputValue("username")}
                  onKeyDown={handleKeyDown}
                ></input>
              </div>

              <div className="relative">
                <div className="animate__animated animate__fadeInDown">
                  <div className="flex justify-between pb-2">
                    <div className=" text-sm text-gray-700 font-semibold">
                      Password
                    </div>
                    <div className=" text-sm text-gray-700 font-semibold">
                      Forgot Password?
                    </div>
                  </div>
                  <input
                    className="w-full rounded-lg p-2"
                    type={open === false ? "password" : "text"}
                    onChange={inputValue("password")}
                    value={password}
                    onKeyDown={handleKeyDown}
                  ></input>
                  <div className="absolute right-2 top-10 text-xl opacity-40 hover:cursor-pointer">
                    {active === true ? (
                      open === false ? (
                        <AiFillEye onClick={toggle} />
                      ) : (
                        <AiFillEyeInvisible onClick={toggle} />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </form>
            <button
              className="flex justify-center items-center bg-black rounded-lg 
            text-white py-3 px-12 animate__animated animate__zoomIn"
              onClick={confirmLogin}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="z-10 animate__animated animate__fadeInRight invisible lg:visible absolute w-[50vw] -top-[15vh] right-[0vw]"
          src="./src/assets/sign.png"
        />
        <img
          className="z-0 animate__animated animate__fadeInRight invisible lg:visible h-[100vh] top-0 right-0 absolute"
          src="./src/assets/logg-right.png"
        />
        <img
          className=" invisible md:visible animate-[popUp_3s] md:absolute w-[264px] -left-[10vw] -top-[97px] "
          src="./src/assets/home/Ellipse7.png"
        />
      </div>
    </div>
  );
};

export default Login;
