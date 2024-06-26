import { useEffect,useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_API + resId);
        const json = await data.json();
        setRestaurantInfo(json?.data);
    }
    return restaurantInfo;
}

export default useRestaurantMenu;