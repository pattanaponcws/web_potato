import axios from "axios";
import React, { useEffect, useState } from "react";

function Allorder_card({ item, menu,setreload }) {
  const data = menu.filter((x) => x.post.postId == item.postId);
  let total = 0;
  function handelrAccept() {
    axios({
      method: "post",
      url: "http://172.20.10.4:5174/api/Accept",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify({
        post: item.postId
      }),
    })
      .then(function (response) {
        
        setreload((x) => x + 1);
      })
      .catch(function (response) {
        //console.log("error");
      });
    return;
  }
  return (
    <>
      <div className="group h-72 w-full [perspective:1000px] lg:px-10">
        <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0 ">
            {/* front card */}
            <img
              className="h-40 w-full rounded-xl object-cover  shadow-black/40"
              src={item.restaurants.restPic}
            />
            <h2 className="text-center text-lg sm:text-xl pt-2 ">
              {item.restaurants.restName}
            </h2>
            <div className="mt-2 border-b-2 border-amber-500 border-dashed"></div>
            <ul className="text-center px-4 py-2 mx-4">
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>Name :</div>
                </div>
                <div className="text-base sm:text-lg">{item.user.username}</div>
              </li>
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>Delivery To :</div>
                </div>
                <div className="text-base sm:text-lg">{item.address}</div>
              </li>
            </ul>
          </div>

          {/* back card */}
          <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-5  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1>รายการอาหาร</h1>
              <ul className="text-center px-4 py-2">
                {data.map((ls, inxdex) => {
                  total += ls.price;
                  return (
                    <li className="flex justify-between items-center gap-x-3">
                      <div className="flex justify-between gap-x-2 text-base sm:text-lg">
                        <div>{ls.countFood} X</div>
                        <div>{ls.menu.menuFood}</div>
                      </div>
                      <div className="text-base sm:text-lg">{ls.price} $</div>
                    </li>
                  );
                })}

                <li className="flex justify-between items-center gap-x-3 mt-4">
                  <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                    <div>ราคารวม</div>
                  </div>
                  <div className="text-base sm:text-lg">{total} $</div>
                </li>

                {/* accept */}
                <button
                  onClick={handelrAccept}
                  className="mt-4 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600"
                >
                  Accept
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allorder_card;
