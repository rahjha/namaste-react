import RestaurantCard,{vegRestaurantLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_GET_RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const VegRestaurant = vegRestaurantLabel(RestaurantCard);
    

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_GET_RESTAURANT_API);
        
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>
                Looks like you are offline!! Please check your internet connection.
            </h1>
        );
    }
    const {loggedInUser, setUserInfo} = useContext(UserContext);
    return listOfRestaurant === null ? ( <Shimmer /> ):(
        <div className="body">
            <div className="flex">
                
                <div className="search p-4 m-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
                </div>

                <div className="search p-4 m-4 flex items-center">
                <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4.5);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
                </div>
                <div className="p-4 m-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black ml-2" 
                            value={loggedInUser} 
                            onChange={(e)=>setUserInfo(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map(
                        (restaurant) => (
                            <Link 
                                key={restaurant.info.id} 
                                to={"/restaurants/"+restaurant.info.id}
                            >
                                {restaurant.info.veg ? <VegRestaurant resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
                                
                            </Link>
                        )
                    )
                }
                
            </div>
        </div>
    )   
}
export default Body;