import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //how to read a dynamic url params
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurantInfo(json.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card.itemCards
    );
  }

  return (
    <div className="flex">
      <div className="pl-2">
        <h2 className="font-bold text-xl">{restaurantInfo.name}</h2>
        <img
          alt="Cuisine Logo"
          src={CDN_URL + restaurantInfo.cloudinaryImageId}
        />
        <h3>{restaurantInfo.locality}</h3>
        <h3>{restaurantInfo.city}</h3>
        <h3>{restaurantInfo.avgRating}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
      </div>
      <div className="pl-10">
        <h2 className="font-bold text-xl">Menu</h2>
        <ul>
          {restaurantMenu?.map((menu) => (
            <li key={menu?.card?.info?.id}>{menu?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
