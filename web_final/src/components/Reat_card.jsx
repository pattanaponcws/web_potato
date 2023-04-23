import React from "react";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { BiCart } from "react-icons/bi";

function Rest_card() {
  return (
    <div className="p-9 w-screen h-screen bg-base bg-cover  ">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 pt-20">
        <div className="bg-amber-300 rounded-2xl w-72 ">
          <img
            className=" rounded-t-2xl"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG"
          />
          <div>
            <ul className="text-center p-4">
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>ไก่ชีส</div>
                </div>
                <div className="flex justify-center text-lg sm:text-2xl text-orange-500 hover:text-white bg-amber-200 hover:bg-orange-500 rounded-full w-10 h-9">
                  <button className="">
                    <BiCart />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rest_card;
