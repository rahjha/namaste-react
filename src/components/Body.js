import ResturantCard from "./ResturantCard";
import { restrauntList } from "./config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  //create function to fetch restaurant data, this will involve API call, so async await
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Conditional Rendering
  // if restaurant is empty => render Shimmer UI
  // if restaurant has data => actual data UI

  //how to not render => early return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant matches your filter</h1>
        ) : (
          filteredRestaurants.map((resturant) => {
            return <ResturantCard {...resturant} key={resturant.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
