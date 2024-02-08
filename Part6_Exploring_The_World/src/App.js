import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { SWIGGY_API } from "./utils/constant";
import Header from "./components/Header";
import { WhatIsInMind } from "./components/WhatInMind";
import { RestaurantChain } from "./components/RestaurantChain";
import { OnlineRestraunts } from "./components/OnlineRestraunts";

const AppLayout = () => {
  const [whatInMindData, setWhatInMindData] = useState([]);
  const [restaurantChainData, setRestrauntChainData] = useState([]);
  const [onlineRestrauntData, setOnlineRestrauntData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let result = await fetch(SWIGGY_API);
      let data = await result.json();
      // console.log(data);
      setWhatInMindData(data?.data?.cards[0]);
      setRestrauntChainData(data?.data?.cards[1]);
      setOnlineRestrauntData(data?.data?.cards[4]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Header />
      <WhatIsInMind data={whatInMindData} />
      <RestaurantChain data={restaurantChainData} />
      <OnlineRestraunts data={onlineRestrauntData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
