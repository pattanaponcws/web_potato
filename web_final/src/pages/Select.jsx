import React, { useState } from "react";
import "animate.css";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

function Select() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <div>
      <div className="w-screen  bg-[https://www.figma.com/file/Uq4s72suWdPp9WXTeEFgSL/WebDev?node-id=65-74&t=vKT1iaGuw2AMiBBE-4] min-h-screen bg-repeat-y bg-cover z-0">
        <div className="relative w-screen min-h-screen">
          <div className=" absolute w-full top-64 z-30">
            <div className="flex justify-around ">
              <a
                href="/Receive"
                className=" text-center p-16 animate__animated animate__fadeInDown "
                onMouseEnter={() => {
                  setHover1(true);
                }}
                onMouseLeave={() => {
                  setHover1(false);
                }}
              >
                <div className="">
                  <button
                    className={`text-6xl lg:text-7xl text-orange-600 left-9 ${
                      hover1 ? "animate-bounce text-orange-700" : ""
                    }`}
                  >
                    <FiDownload />
                  </button>
                  <div className="text-center text-xs md:text-lg  lg:text-xl font-bold">
                    Receiving Order
                  </div>
                </div>
              </a>
              <img
                className="absolute invisible md:visible w-1/3  z-20 animate__animated animate__fadeInDown "
                src="https://sv1.picz.in.th/images/2023/04/28/ycft8v.png"
              />
              <a
                href="/Post"
                className=" text-center p-16 animate__animated animate__fadeInDown "
                onMouseEnter={() => {
                  setHover2(true);
                }}
                onMouseLeave={() => {
                  setHover2(false);
                }}
              >
                <div className="">
                  <button
                    className={`text-6xl lg:text-7xl text-orange-600 left-9 ${
                      hover2 ? "animate-bounce text-orange-700" : ""
                    }`}
                  >
                    <FiBell />
                  </button>
                  <div className="text-center text-xs md:text-lg  lg:text-xl font-bold">
                    My Order
                  </div>
                </div>
              </a>
            </div>
          </div>

          <img
            className="absolute w-screen min-h-screen animate__animated animate__fadeInBottomLeft z-10 "
            src="https://sv1.picz.in.th/images/2023/04/28/ycbrpa.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Select;