import React, { useEffect } from "react";

const OrderCard = () => {
  return (
    <div className="bg-[#FDE27B] w-[430px] h-[552px] rounded-[33px] border-4 border-black m-10">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYAYp0rga3j0hWutCu4rweudEUI6RA7Eyeoa2HTtnUMuwDT8J554.jpg"
          className="w-[390px] h-[233px] rounded-[27px] my-4"
        ></img>
        <h1 className="text-4xl my-2 pt-4">รวมไทยสร้างชาติ</h1>
        <h1 className="text-4xl">- - - - - - - - - - - - - - - - - -</h1>
        <div className="flex flex-row text-4xl">
          <div>
            <h1>Name :</h1>
            <h1>Delivery to :</h1>
          </div>
          <div className="px-6"></div>
          <div>
            <h1>ควาย</h1>
            <h1>ทุ่งนา</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
