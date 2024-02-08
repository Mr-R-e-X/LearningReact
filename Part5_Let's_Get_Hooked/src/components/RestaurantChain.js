import { RESTAURNT_BASE_URL } from "../utils/constant";
import { useState } from "react";
const RestaurantChain = (props) => {
  const { gridElements, header } = props.data.card.card;
  const { restaurants } = gridElements.infoWithStyle;
  let [listOfRestaurant, setListOfRestrunt] = useState([...restaurants]);

  return (
    <>
      <h1 className="what-in-mind-title"> {header.title} </h1>
      <button
        onClick={() => {
          let topRatedRestaurant = listOfRestaurant.filter((res) => {
            // console.log(res);
            return res.info.avgRating >= 4.5;
          });
          setListOfRestrunt(topRatedRestaurant);
          // console.log(topRatedRestaurant);
        //   console.log(listOfRestaurant);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="what-in-mind">
        {listOfRestaurant.map((restaurant) => (
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
        <img src={RESTAURNT_BASE_URL + cloudinaryImageId} />
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

export { RestaurantChain, RestaurantChainCard };
