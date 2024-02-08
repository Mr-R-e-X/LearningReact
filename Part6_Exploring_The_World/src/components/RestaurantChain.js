import { RESTAURNT_BASE_URL } from "../utils/constant";
import { useState } from "react";
import { ShimmerUi_Restraunt_Card } from "./ShimmerUI";

const RestaurantChain = (props) => {
  if (props.data.length === 0) {
    return <ShimmerUi_Restraunt_Card />;
  }
  const { gridElements, header } = props?.data?.card?.card;
  const { restaurants } = gridElements?.infoWithStyle;
  const [listOfRestaurant, setListOfRestrunt] = useState([...restaurants]);
  const [filterRestaurant, setFilterRestrunt] = useState([...restaurants]);
  const [searchedName, setSearchedName] = useState("");
  const [click, setClick] = useState(1);
  return (
    <>
      <h1 className="what-in-mind-title"> {header.title} </h1>
      <div className="filter-div">
        <div className="top-rated">
          <button
            onClick={() => {
              if (click === 1) {
                setClick(0);
                let topRatedRestaurant = listOfRestaurant.filter((res) => {
                  // console.log(res);
                  return res.info.avgRating >= 4.5;
                });
                setFilterRestrunt(topRatedRestaurant);
              } else {
                console.log(click);
                setClick(1);
                setFilterRestrunt([...restaurants]);
              }
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="serach-div">
          <input
            type="text"
            value={searchedName}
            required
            onChange={(e) => {
              setSearchedName(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              let filteredRestrauntName = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchedName.toLowerCase())
              );
              setFilterRestrunt(filteredRestrauntName);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="what-in-mind">
        {filterRestaurant.map((restaurant) => (
          <RestaurantChainCard
            key={restaurant?.info?.id}
            data={restaurant?.info}
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
  } = props?.data;

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
