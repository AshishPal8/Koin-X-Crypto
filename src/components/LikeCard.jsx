import React from "react";

const LikeCard = ({ item }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] border-2 border-black inline-block cursor-pointer relative p-2 overflow-hidden rounded-lg mx-2">
      <div className="flex items-center">
        <img className="w-10" src={item.small} alt="" />
        <h4>{item.symbol}</h4>
        <div className="bg-[#EBF9F4] text-[#14B079] py-1 px-3 rounded-lg w-fit flex items-center">
          <p>0.5%</p>
        </div>
      </div>
      <div>
        <h1>$3434</h1>
      </div>
      <div>
        <img src="./b.jpg" alt="" />
      </div>
    </div>
  );
};

export default LikeCard;
