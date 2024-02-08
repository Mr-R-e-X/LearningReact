import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { WhatIsInMind } from "./components/WhatInMind";
import { RestaurantChain } from "./components/RestaurantChain";
import { staticData } from "./utils/staticData";


const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <WhatIsInMind data={staticData.data.cards[0]} />
      <RestaurantChain data={staticData.data.cards[1]} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
