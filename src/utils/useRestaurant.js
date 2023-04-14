import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const restraurantData = [];
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
    restraurantData.push(restaurantMenu);
    restraurantData.push(restaurantInfo);
  }
  console.log(restraurantData[0]);
  console.log(restraurantData[1]);
  return restraurantData;
};

export default useRestaurant;
