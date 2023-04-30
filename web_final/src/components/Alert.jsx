import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Alert = ({ m }) => {
  return (
    <div className={``}>
      <div className=" rounded-lg  bg-emerald-500 opacity-90 p-3 text-[15px] w-[300px] text-white">
        <div className="flex ">
          <div className="text-[23px] text-white ">
            <AiOutlineCheckCircle />
          </div>
          <div className="px-2 ">Success</div>
        </div>
        <div className="mx-8 text-sm  ">Add : {m}</div>
      </div>
    </div>
  );
};

export default Alert;
