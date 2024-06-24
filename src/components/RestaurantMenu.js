import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_API + resId);
        const json = await data.json();
        setRestaurantInfo(json?.data);
    }

    if(restaurantInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")+ " | "+costForTwoMessage}</p>
            <h4>Menu Items :</h4>
            <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name+" - Rs - "+item.card.info.price/100}</li>)}
            </ul>
        </div>
    );
}

export default RestaurantMenu;