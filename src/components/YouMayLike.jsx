import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import LikeCard from "./LikeCard";

const YouMayLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins);
        console.log(response.data.coins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setLoading(false);
      }
    };
    fetchTrendingCoins();
  }, []);

  const sliderLeft = (sliderId) => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const sliderRight = (sliderId) => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="bg-white px-4 md:px-14 py-4 md:py-10">
      <h2 className="font-bold text-2xl md:text-3xl p-4 my-5">
        You may also Like
      </h2>
      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={() => sliderLeft("slider1")}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id="slider1"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          style={{ paddingBottom: "17px", overflowX: "hidden" }}
        >
          {trendingCoins.map((coin) => (
            <LikeCard
              key={coin.item.id}
              small={coin.item.small}
              symbol={coin.item.symbol}
              price_btc={coin.item.price_btc}
              price={coin.item.data.price}
              sparkline={coin.item.data.sparkline}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={() => sliderRight("slider1")}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
      <h2 className="font-bold text-2xl md:text-3xl p-4 my-2">
        Trending Coins
      </h2>
      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={() => sliderLeft("slider2")}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id="slider2"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          style={{ paddingBottom: "17px", overflowX: "hidden" }}
        >
          {trendingCoins.map((coin) => (
            <LikeCard
              key={coin.item.id}
              small={coin.item.small}
              symbol={coin.item.symbol}
              price_btc={coin.item.price_btc}
              price={coin.item.data.price}
              sparkline={coin.item.data.sparkline}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={() => sliderRight("slider2")}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
    </div>
  );
};

export default YouMayLike;
