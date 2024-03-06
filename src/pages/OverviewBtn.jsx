import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosInformationCircle } from "react-icons/io";

function Overview({ bitcoinData }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const buttonNames = [
    "Overview",
    "Fundamentals",
    "Non Insights",
    "Sentiments",
    "Team",
    "Technical",
    "Tokenomics",
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="my-5">
        {buttonNames.map((name, index) => (
          <button
            key={index}
            className={
              index === activeButton
                ? "active text-blue-600 font-bold border-blue-600 border-none outline-none"
                : "btn font-bold text-gray-500"
            }
            onClick={() => handleClick(index)}
          >
            {name}
          </button>
        ))}
      </Slider>
      <div className="bg-white rounded-lg py-4 px-2 md:px-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Performance</h1>
        <div className="flex justify-between items-center my-8">
          <div className="">
            <p className="text-gray-500 font-medium">Today's Low</p>
            <p className="text-gray-600 font-semibold text-xl">
              ${bitcoinData && bitcoinData.usd}
            </p>
          </div>
          <div className="gradient-line"></div>
          <div>
            <p className="text-gray-500 font-medium">Today's High</p>
            <p className="text-gray-600 font-semibold text-xl">
              ${bitcoinData && bitcoinData.usd}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center my-8">
          <div className="">
            <p className="text-gray-500 font-medium">52W Low</p>
            <p className="text-gray-600 font-semibold text-xl">
              ${bitcoinData && bitcoinData.usd}
            </p>
          </div>
          <div className="gradient-line"></div>
          <div>
            <p className="text-gray-500 font-medium">52W High</p>
            <p className="text-gray-600 font-semibold text-xl">
              ${bitcoinData && bitcoinData.usd}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-gray-700 text-2xl font-semibold">
              Fundamentals
            </h1>
            <IoIosInformationCircle size={25} className="text-gray-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                Bitcoin Price
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">
                ${bitcoinData && bitcoinData.usd}
              </h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">Market Cap</h4>
              <h4 className="text-gray-800 text-lg font-semibold">
                $323,507290,047
              </h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                24h low / 24h high
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">
                ${bitcoinData && bitcoinData.usd} / $
                {bitcoinData && bitcoinData.usd}
              </h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                Market Cap Dominance
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">38,343%</h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                7d low / 7d high
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">
                ${bitcoinData && bitcoinData.usd} / $
                {bitcoinData && bitcoinData.usd}
              </h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                Volume / Market Cap
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">0.0718</h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                Trading Volume
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">
                $78,786,564,890
              </h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                All-Time High
              </h4>
              <div className="text-end">
                <h4 className="text-gray-800 text-lg font-semibold">
                  ${bitcoinData && bitcoinData.usd}{" "}
                  <span className="text-red-500">-76.5%</span>
                </h4>
                <p className="text-sm">Mar 06, 2023 (about 1 Year)</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                Market Cap Rank
              </h4>
              <h4 className="text-gray-800 text-lg font-semibold">#1</h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 py-3">
              <h4 className="text-gray-500 font-medium text-lg">
                All-Time Low
              </h4>
              <div className="text-end">
                <h4 className="text-gray-800 text-lg font-semibold">
                  ${bitcoinData && bitcoinData.usd}{" "}
                  <span className="text-green-500">24729.1%</span>
                </h4>
                <p className="text-sm">Mar 06, 2023 (about 1 Year)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
