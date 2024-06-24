import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_GET_RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_GET_RESTAURANT_API);
        
        const json = await data.json();
        
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurant.length === 0 ? ( <Shimmer /> ):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4.5);
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(
                        (restaurant) => (
                            <Link className="restaurantCard" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                        )
                    )
                }
                
            </div>
        </div>
    )   
}
export default Body;