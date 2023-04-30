import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
function Receive_card({ menu, accept,setreload }) {
  let total=0;
  function Cancel() {
    axios({
      method: "delete",
      url: "http://172.20.10.4:5174/api/Cancel/"+accept.acceptId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        setreload((x) => x + 1);
      })
  }
  function Complete() {
    axios({
      method: "delete",
      url: "http://172.20.10.4:5174/api/Complete/"+accept.acceptId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        setreload((x) => x + 1);
      })
  }
  return (
    <>
      <div className="group h-96 w-full [perspective:1000px] lg:px-10 font-prom">
        <div className=" relative bg-amber-200 w-full h-96 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0 ">
            {/* front card */}
            <img
              className="h-60 w-full rounded-xl object-cover  shadow-black/40"
              src={accept.post.restaurants.restPic}
            />
            <h2 className="text-center text-lg sm:text-xl pt-2 ">
              {accept.post.restaurants.restName}
            </h2>
            <div className="mt-2 border-b-2 border-amber-500 border-dashed"></div>
            <ul className="text-center  py-2 mx-4">
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>Name :</div>
                </div>
                <div className="text-base sm:text-lg">
                  {accept.post.user.username}
                </div>
              </li>
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>Delivery To :</div>
                </div>
                <div className="text-base sm:text-lg">
                  {accept.post.address}
                </div>
              </li>
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>Tel :</div>
                </div>
                <div className="text-base sm:text-lg">{accept.post.tel}</div>
              </li>
            </ul>
          </div>

          {/* back card */}
          <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-5  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-lg pt-2 pb-">รายการอาหาร</h1>
              <ul className="text-center px-4 py-2">
                {menu.map((item, inxdex) => {
                  if (accept.post.postId!=item.post.postId) return;
                  total += item.price;
                  return (
                    <li className="flex justify-between items-center gap-x-3">
                      <div className="flex justify-between gap-x-2 text-base ">
                        <div>{item.countFood} X</div>
                        <div>{item.menu.menuFood}</div>
                      </div>
                      <div className="text-base">{item.price} $</div>
                    </li>
                  );
                })}

                <li className="flex justify-between items-center gap-x-3 mt-4 text-orange-300">
                  <div className="flex justify-between gap-x-2 text-lg  ">
                    <div>ราคารวม</div>
                  </div>
                  <div className="text-lg">{total} $</div>
                </li>

                {/* accept */}
                <li className="flex flex-row justify-between">
                  <button onClick={Complete} className="mt-4 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Complete
                  </button>
                  <button onClick={Cancel} className="mt-4 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Receive_card;
