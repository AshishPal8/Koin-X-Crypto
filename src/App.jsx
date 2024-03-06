import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";
import Chart from "./pages/Chart";
import Overview from "./pages/OverviewBtn";
import Started from "./pages/Started";
import Trending from "./components/Trending";
import About from "./components/About";
import Teams from "./components/Teams";
import Token from "./components/Token";
import Sentiment from "./components/Sentiment";
import LikeCard from "./components/LikeCard";
import YouMayLike from "./components/YouMayLike";

const App = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        setBitcoinData(response.data.bitcoin);
        // console.log(response.data.bitcoin);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
        setLoading(false);
      }
    };
    fetchBitcoinData();
  }, []);

  return (
    <div className="w-full bg-[#EFF2F5]">
      <Navbar />
      <div className="flex md:flex-row gap-8 flex-col px-2 md:px-8 m-2 md:m-4">
        <div className="w-full md:w-2/3">
          <Chart bitcoinData={bitcoinData} />
          <Overview bitcoinData={bitcoinData} />
          <Sentiment />
          <About />
          <Token />
          <Teams />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <Started />
          <Trending />
        </div>
      </div>
      <YouMayLike />
    </div>
  );
};

export default App;
