import React from "react";

const LikeCard = ({ small, symbol, price_btc, price, sparkline }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] border-2 border-black inline-block cursor-pointer relative p-2 overflow-hidden rounded-lg mx-2">
      <div className="flex items-center gap-2 my-2">
        <img className="w-8 rounded-full" src={small} alt="" />
        <h4>{symbol}</h4>
        <div className="bg-[#EBF9F4] text-[#14B079] py-1 px-3 rounded-lg w-fit flex items-center">
          <p>{price_btc.toFixed(2)}%</p>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-xl font-semibold">{price}</h1>
      </div>
      <div className="flex justify-center items-center">
        <img src={sparkline} alt="Sparkline" />
      </div>
    </div>
  );
};

export default LikeCard;
