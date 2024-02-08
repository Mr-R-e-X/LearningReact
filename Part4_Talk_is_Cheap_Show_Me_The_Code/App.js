import React from "react";
import ReactDOM from "react-dom/client";
import { staticData } from "./SwiggyStaticData";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.squadhelp.com/story_images/visual_images/1645990092-SpiceBuy.png?class=show"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const WhatIsInMind = (props) => {
  const { imageGridCards, header } = props.data.card.card;
  const { info } = imageGridCards;
  return (
    <>
      <h1 className="what-in-mind-title"> {header.title} </h1>
      <div className="what-in-mind">
        {info.map((data) => (
          <WhatIsInMindCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

const WhatIsInMindCard = (props) => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="what-in-mind-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          data.imageId
        }
      />
    </div>
  );
};

const RestaurantChain = (props) => {
  const { gridElements, header } = props.data.card.card;
  const { restaurants } = gridElements.infoWithStyle;
  return (
    <>
      <h1 className="what-in-mind-title"> {header.title} </h1>
      <div className="what-in-mind">
        {restaurants.map((restaurant) => (
          <RestaurantChainCard
            key={restaurant.info.id}
            data={restaurant.info}
          />
        ))}
      </div>
    </>
  );
};

const RestaurantChainCard = (props) => {
  const {
    name,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    sla,
    locality,
    totalRatingsString,
  } = props.data;

  return (
    <div className="restaurant-card">
      <div className="restaurant-img-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="restaurant-card-dtls">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{areaName}</p>
        <p>{locality}</p>
        <p>{avgRating} Stars</p>
        <p>Total Rating : {totalRatingsString}</p>
        <p>Delivary Time: {sla.deliveryTime}</p>
        <p>Last Mile Delivary: {sla.lastMileTravel} KM</p>
      </div>
    </div>
  );
};

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
