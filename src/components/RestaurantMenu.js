import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(restaurantInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")+ " | "+costForTwoMessage}</p>
            
            {/* categories accordian which is collapsable */}
            {categories.map((category, index)=>
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                />)
            }

        </div>
    );
}

export default RestaurantMenu;