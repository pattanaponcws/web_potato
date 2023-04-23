import React from "react";
import "animate.css";
import Allorder_card from "../components/Allorder_card";

function Home() {
  document.title = "Home";
  return (
    <div>

    <div className="p-9 w-screen h-screen bg-home bg-cover flex lg:px-56 items-center">
      <div className="pt-20 md:mx-10">
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
        <div className=" my-10 text-sm sm:text-lg lg:text-xl animate__animated animate__fadeInDown">
          If you are looking for a website that offers <br></br>
          food delivery service,you can choose the <br></br>
          food you want and place an order for delivery.
        </div>

        <a href="/restaurant">
          <button
            className=" my-10 flex justify-center items-center bg-amber-600 text-white rounded-full text-sm sm:text-lg lg:text-xl font-bold 
         py-3 px-12 animate__animated animate__zoomIn"
          >
            ORDER NOW
          </button>
        </a>
      </div>
    </div>
    <div>
      <Allorder_card></Allorder_card>
    </div>
    </div>

  );
}

export default Home;
