import React, { useState } from "react";
import "animate.css";
import Allorder from "./Allorder";

function Home() {
  document.title = "Home";

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div className=" relative w-screen h-screen bg-base1 bg-cover  items-center font-prom">
          <div className=" grid lg:grid-cols-2 lg:px-40">

          <div className="flex flex-col justify-center h-screen">
            <div>
              <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
                Welcome To
              </h1>
            </div>
            <div className="flex justify-center">
              <div className=" flex ">
                <div className=" text-4xl sm:text-5xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
                  Potato
                </div>
                <div className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-600  mx-4 animate__animated animate__fadeInDown">
                  Delivery
                </div>
              </div>
            </div>

            <a href="/restaurant" className=" flex justify-center">
              <button
                className=" my-10 flex justify-center items-center bg-amber-600 text-white rounded-full text-sm sm:text-lg lg:text-xl font-bold 
       py-3 px-12 animate__animated animate__zoomIn"
              >
                ORDER NOW
              </button>
            </a>
          </div>
          </div>
          <div className="">
            <img
              className=" invisible lg:visible animate-movingUpandDown z-10 absolute w-[40vw] top-[15vh] right-[10vw]"
              src="./src/assets/grab.png"
            />
            <img
              className=" z-0 absolute bottom-0 w-[50vw] right-10 animate-[popUp_2s] opacity-90"
              src="./src/assets/home/Ellipse10.png"
            />
           <img
              className=" invisible md:visible animate-[popUp_3s] md:absolute w-[100px] left-[8vw] bottom-[200px] "
              src="./src/assets/home/Ellipse11.png"
            />
            <img
              className=" invisible md:visible animate-[popUp_3s] md:absolute w-[264px] -left-[10vw] -top-[97px] "
              src="./src/assets/home/Ellipse7.png"
            />
            <img
              className=" animate-[popUp_3s] md:visible absolute top-[10vh] w-28 right-[10vw]"
              src="./src/assets/home/Ellipse7.png"
            />
          </div>
        </div>
      ) : (
        <div className=" relative w-screen h-screen bg-base1 bg-cover flex md:px-24 lg:px-56 items-center font-prom">
          <div className="pt-20 md:mx-10 z-30 ml-10 md:ml-0">
            <div className="pb-3">
              <div>
                <div className=" flex text-2xl sm:text-3xl lg:text-5xl font-bold gap-2 pb-5">
                  <h2 className="animate__animated animate__fadeInDown">🥔</h2>
                  <h2 className=" text-amber-600 animate__animated animate__fadeInDown">
                    POTATO
                  </h2>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
                  We Serve
                </h1>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className=" text-4xl sm:text-5xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
                  Delicious
                </div>
                <div className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-600  mx-4 animate__animated animate__fadeInDown">
                  Food
                </div>
              </div>
            </div>
            <div className=" z-40 my-10 text-sm sm:text-lg lg:text-xl animate__animated animate__fadeInDown">
              If you are looking for a website that offers <br></br>
              food delivery service,you can choose the <br></br>
              food you want and place an order for delivery.
            </div>

            {/* <a href="/restaurant">
              <button
                className=" my-10 flex justify-center items-center bg-amber-600 text-white rounded-full text-sm sm:text-lg lg:text-xl font-bold 
         py-3 px-12 animate__animated animate__zoomIn"
              >
                ORDER NOW
              </button>
            </a> */}
          </div>
          <div className="">
            <img
              className=" invisible md:visible animate-movingUpandDown z-50 absolute w-[30vw] top-[15vh] right-[10vw]"
              src="./src/assets/home/potatohead.png"
            />
            <img
              className=" z-0 absolute top-0 md:w-100 right-0 animate-moveRight h-screen opacity-90"
              src="./src/assets/home/Rectangle5.png"
            />
            <img
              className="animate-[moveUp_1s] absolute -bottom-[50vh] w-[684px] -left-[20vw]"
              src="./src/assets/home/Ellipse4.png"
            />
            <img
              className=" invisible md:visible animate-moveDown md:absolute w-[264px] -left-[10vw] -top-[97px] "
              src="./src/assets/home/Ellipse7.png"
            />
            <img
              className=" animate-[popUp_3s] md:visible absolute top-[10vh] w-28 left-[60vw]"
              src="./src/assets/home/Ellipse7.png"
            />
            <img
              className="invisible md:visible animate-[popUp_2s] md:absolute top-80 w-12 left-[500px]"
              src="./src/assets/home/Ellipse8.png"
            />
          </div>
        </div>
      )}

      {localStorage.getItem("token") ? (
        <div>
          <Allorder></Allorder>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
