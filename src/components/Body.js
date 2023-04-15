import ResturantCard from "./ResturantCard";
import { restrauntList } from "./config";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { user, setUser } = useContext(UserContext);
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

  // const isOnline = useOnline();
  // console.log("isOnline :", isOnline);
  // if (!isOnline) {
  //   return <h1>Offline, please check your internet connection!!</h1>;
  // }

  // Conditional Rendering
  // if restaurant is empty => render Shimmer UI
  // if restaurant has data => actual data UI

  //how to not render => early return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-1"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="px-2 py-1 m-2 bg-purple-800 hover:bg-gray-700 text-white rounded-lg"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "code2elevate@gmail.com",
            })
          }
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant matches your filter</h1>
        ) : (
          filteredRestaurants.map((resturant) => {
            return (
              <Link
                to={"restaurant/" + resturant.data.id}
                key={resturant.data.id}
              >
                <ResturantCard {...resturant} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
