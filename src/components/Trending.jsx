import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdArrowDropup } from "react-icons/io";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
        console.log(response.data.coins.slice(0, 3));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setLoading(false);
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl">
      <h1 className="text-3xl font-bold">Trending Coins (24h)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="flex justify-between items-center my-4"
            >
              <div className="flex justify-center items-center gap-2">
                <img
                  className="w-[30px]"
                  src={coin.item.large}
                  alt={coin.item.name}
                />
                <h2 className="text-xl font-semibold">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </h2>
              </div>
              <div className="bg-[#EBF9F4] text-[#14B079] py-1 px-3 rounded-lg w-fit flex items-center">
                <IoMdArrowDropup />
                <p>{coin.item.price_btc.toFixed(2)}%</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
