import React from "react";
import { GoArrowRight } from "react-icons/go";

const Started = () => {
  return (
    <div className="bg-[#0052FE] flex justify-center items-center flex-col gap-4 md:gap-10 p-4 md:p-10 rounded-2xl text-white">
      <h1 className="text-4xl font-bold text-center">
        Get Started With KoiX for FREE
      </h1>
      <p className="text-lg font-semibold text-center">
        With our range of features that you can equip for free, KoinX allow to
        be more educated and aware of your tax reports.
      </p>
      <img src="./blue.jpg" alt="" className="w-[200px]" />

      <div className="bg-white cursor-pointer text-black py-2 font-bold text-xl md:text-2xl px-3 md:px-5 rounded-lg w-fit flex items-center">
        <p className="text-lg">Get Started with FREE</p>
        <GoArrowRight />
      </div>
    </div>
  );
};

export default Started;
