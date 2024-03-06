import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import TradingViewWidget from "./TradingView";

const Chart = ({ bitcoinData }) => {
  return (
    <div className=" bg-white rounded-lg py-4 px-2 md:px-8">
      <div className="flex items-center gap-4">
        <img className="w-[50px]" src="./b.jpg" alt="" />
        <h1 className="text-3xl font-bold">Bitcoin</h1>
        <h3 className="text-xl text-gray-500">BTC</h3>
        <h2 className="text-lg md:text-xl bg-gray-600 p-2 rounded-lg text-white ">
          Rank #1
        </h2>
      </div>
      <div>
        <div className="flex items-center gap-4 mt-8">
          <h1 className="text-3xl font-bold">
            ${bitcoinData && bitcoinData.usd}
          </h1>
          <div className="bg-[#EBF9F4] text-[#14B079] py-1 px-3 rounded-lg w-fit flex items-center">
            <IoMdArrowDropup />
            <p>{bitcoinData && bitcoinData.usd_24h_change.toFixed(2)}</p>
          </div>
          <p className="text-gray-500">(24H)</p>
        </div>
        <div className="border-b-2 border-gray-300 pb-6">
          <h4 className="text-lg font-semibold text-gray-700">
            ₹
            {bitcoinData && bitcoinData.inr && bitcoinData.inr.toLocaleString()}
          </h4>
        </div>
      </div>
      <div>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Chart;
