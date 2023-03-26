import ResturantCard from "./ResturantCard";
import { restrauntList } from "./config";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchInput)
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchInput, setSearchInput] = useState();
  return (
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
            const data = filterData(searchInput, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search - {searchInput}
        </button>
      </div>
      <div className="resturant-list">
        {restaurants.map((resturant) => {
          return <ResturantCard {...resturant} key={resturant.info.resId} />;
        })}
      </div>
    </>
  );
};

export default Body;
