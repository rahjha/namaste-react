import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    if(restaurantInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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