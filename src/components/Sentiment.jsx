import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import EventCaursel from "./EventsCaursel";

const slides = [
  {
    logoSrc: "./book.jpg",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas reprehenderit odit.",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia necessitatibus, ipsa cumque, est aliquid expedita voluptas doloribus vero atque, quae eius incidunt molestiae quasi dolorum optio nisi accusantium.",
    backgroundColor: "#c3dbfb",
  },
  {
    logoSrc: "growth.jpg",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas reprehenderit odit.",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia necessitatibus, ipsa cumque, est aliquid expedita voluptas doloribus vero atque, quae eius incidunt molestiae quasi dolorum optio nisi accusantium.",
    backgroundColor: "#c2e4b6",
  },
  {
    logoSrc: "business.png",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas reprehenderit odit.",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia necessitatibus, ipsa cumque, est aliquid expedita voluptas doloribus vero atque, quae eius incidunt molestiae quasi dolorum optio nisi accusantium.",
    backgroundColor: "#fba1a1",
  },
];

const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-2 md:px-8 mt-4">
      <h1 className="text-2xl md:text-3xl font-semibold">Sentiment</h1>
      <div className="flex items-center gap-2 mt-5">
        <h1 className="text-gray-700 text-xl font-semibold">Key Events</h1>
        <IoIosInformationCircle size={20} className="text-gray-500" />
      </div>
      <div>
        <EventCaursel slides={slides} />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h1 className="text-gray-700 text-xl font-semibold">
            Analyst Estmates
          </h1>
          <IoIosInformationCircle size={20} className="text-gray-500" />
        </div>
        <div className="flex gap-10 my-5">
          <div className="w-[1/4]">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#EBF9F4]">
              <h1 className="text-4xl font-bold text-[#6e8d63]">76%</h1>
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex items-center gap-2 ">
              <h4 className="text-gray-400 font-medium">Buy</h4>
              <div className="w-[76%] h-[8px] bg-[#00B386] rounded"></div>
              <h4 className="text-gray-400 font-medium">76%</h4>
            </div>
            <div className="flex items-center gap-2 ">
              <h4 className="text-gray-400 font-medium">Hold</h4>
              <div className="w-[8%] h-[8px] bg-gray-400 rounded"></div>
              <h4 className="text-gray-400 font-medium">8%</h4>
            </div>
            <div className="flex items-center gap-2 ">
              <h4 className="text-gray-400 font-medium">Sell</h4>
              <div className="w-[16%] h-[8px] bg-[#F7324C] rounded"></div>
              <h4 className="text-gray-400 font-medium">16%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
