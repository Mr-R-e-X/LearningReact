import { useEffect, useState } from "react";
import { RESTAURNT_BASE_URL } from "../utils/constant";
import { ShimmerUi_Restraunt_Card } from "./ShimmerUI";

export const OnlineRestraunts = (props) => {
  if (props.data.length === 0) {
    return <ShimmerUi_Restraunt_Card />;
  }
  let restraunt =
    props?.data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [restaurantList, setRestrauntList] = useState([...restraunt]);
  const [filterRestaurant, setFilterRestrunt] = useState([...restraunt]);
  const [searchedName, setSearchedName] = useState("");
  const [click, setClick] = useState(1);
  return (
    <>
      <h1 className="what-in-mind-title">
        Restaurants with online food delivery
      </h1>
      <div className="filter-div">
        <div className="top-rated">
          <button
            onClick={() => {
              if (click === 1) {
                setClick(0);
                let topRatedRestaurant = restaurantList.filter((res) => {
                  // console.log(res);
                  return res.info.avgRating >= 4.5;
                });
                setFilterRestrunt(topRatedRestaurant);
              } else {
                console.log(click);
                setClick(1);
                setFilterRestrunt([...restraunt]);
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
              let filteredRestrauntName = restaurantList.filter((res) =>
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
        {filterRestaurant.map((res) => (
          <OnlineRestrauntsCard key={res?.info?.id} data={res?.info} />
        ))}
      </div>
    </>
  );
};

const OnlineRestrauntsCard = (props) => {
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
