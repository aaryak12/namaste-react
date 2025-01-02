import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {
    listOfRestaurants,
    filteredRestaurants,
    searchRestaurants,
    topRated,
    viewAll,
  } = useRestaurants();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-2 py-1 bg-green-100 rounded-md"
            onClick={() => {
              searchRestaurants(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-2 px-2 py-1 bg-gray-100 rounded-md"
          onClick={() => {
            topRated();
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="m-2 px-2 py-1 bg-yellow-100 rounded-md"
          onClick={() => {
            viewAll();
          }}
        >
          View all Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant.info.avgRating >= 4.4 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
