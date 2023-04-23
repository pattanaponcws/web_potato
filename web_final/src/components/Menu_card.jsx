import React from "react";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { HiTrash } from "react-icons/hi";

function Menu_card() {
  return (
    <div className="p-9 w-screen h-screen bg-base bg-cover  ">
      


      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 pt-20">
        <div className="bg-amber-100 rounded-2xl w-64 " >
         <img className=" rounded-t-2xl" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG" />
          <div>
            <h2 className="text-center text-lg sm:text-xl">restaurant</h2>
            <ul className="text-center px-4 py-2">
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg "> 
                  <div>ไก่ชีส</div>
                </div>
                <div className="text-base sm:text-lg">70 $</div>
              </li>
             
            </ul>
      
            
          </div>
          <div className="flex justify-around p-2">
          <button className="py-2 px-5  bg-amber-200 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >-</button>
              <button className="py-2 px-5  bg-amber-200 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >0</button>
              <button className="py-2 px-5  bg-amber-200 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >+</button>
          </div>
          <div className="text-center text-2xl pb-3 text-orange-500 ">
          <button className="py-2 px-5   bg-amber-200 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >Add to Cart</button>
        </div>
        </div>
     
        
      </div>
    </div>
  );
}

export default Menu_card;
