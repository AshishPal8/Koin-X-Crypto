import React from "react";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-2 md:px-8 mt-4">
      <h1 className="text-2xl font-semibold">About Bitcoin</h1>
      <div className="my-4 pb-4 border-b-2 border-gray-200">
        <h3 className="text-lg font-bold my-2">What is Bitcoin?</h3>
        <p className="text-base font-normal text-gray-600">
          Bitcoin is a decentralized digital currency, often referred to as a
          cryptocurrency. It was invented in 2008 by an unknown person or group
          of people using the name Satoshi Nakamoto and was released as
          open-source software in 2009. Bitcoin enables peer-to-peer
          transactions directly without the need for an intermediary such as a
          bank or payment processor.
        </p>
      </div>
      <div className="my-4 pb-4 border-b-2 border-gray-200">
        <h3 className="text-lg font-bold my-2">Lorem ipsum dolor sit amet.</h3>
        <p className="text-base font-normal text-gray-600 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          a, quo vero eligendi minima expedita harum ab rem facilis nemo,
          tempore officia aut commodi omnis doloremque eos fuga aliquid cumque
          dignissimos quas, repellendus ut ratione consequuntur illum? Quos
          facere beatae nostrum dolorem dicta aspernatur ad.
        </p>
        <p className="text-base font-normal text-gray-600 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          a, quo vero eligendi minima expedita harum ab rem facilis nemo,
          tempore officia aut commodi omnis doloremque eos fuga aliquid cumque
          dignissimos quas, repellendus ut ratione consequuntur illum? Quos
          facere beatae nostrum dolorem dicta aspernatur ad.
        </p>
        <p className="text-base font-normal text-gray-600 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          a, quo vero eligendi minima expedita harum ab rem facilis nemo,
          tempore officia aut commodi omnis doloremque eos fuga aliquid cumque
          dignissimos quas, repellendus ut ratione consequuntur illum? Quos
          facere beatae nostrum dolorem dicta aspernatur ad.
        </p>
      </div>
      <div>
        <h1 className="text-2xl my-4 font-bold">Already Holding Bitcoin?</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gradient-to-tl from-blue-600 to-green-400 p-4 rounded-xl flex justify-between items-center">
            <img
              src="./calculate.jpg"
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-2xl sm:text-3xl text-white font-bold">
                Calculate Your Profits
              </h1>
              <div className="bg-white text-black py-0 sm:py-1 font-bold text-xl md:text-2xl px-2 md:px-3 rounded-lg w-fit flex items-center cursor-pointer">
                <p className="text-lg">Check Now</p>
                <GoArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tl from-red-600 to-red-400 p-4 rounded-xl flex justify-between items-center">
            <img
              src="./tax.jpg"
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-2xl sm:text-3xl text-white font-bold">
                Calculate Your Tax Liability
              </h1>
              <div className="bg-white text-black py-0 sm:py-1 font-bold text-xl md:text-2xl px-2 md:px-3 rounded-lg w-fit flex items-center cursor-pointer">
                <p className="text-lg">Check Now</p>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
