import React, { useEffect } from "react";

const OrderCard = ({accept}) => {
  return (
    <div className="bg-amber-200 w-full h-80 rounded-xl shadow-lg ">
      <div className=" absolute inset-0 ">
            {/* front card */}
            <img
              className="h-40 w-full rounded-xl object-cover  shadow-black/40"
              src={accept.post.restaurants.restPic}
            />
            <h2 className="text-center text-lg sm:text-xl pt-2 ">
              {accept.post.restaurants.restName}
            </h2>
            <div className="mt-2 border-b-2 border-amber-500 border-dashed"></div>
            <ul className="text-center px-4 py-2 mx-4">
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
    </div>
  );
};

export default OrderCard;
