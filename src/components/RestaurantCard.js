import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    
    console.log(props);
    const {resData} = props;
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resData.info;
    return(    
        <div className="px-4 py-2 m-4 w-[250px] hover:bg-gray-100">
            <img
                className="rounded-lg h-[250px]"
                alt="res-logo"
                src={
                    CDN_URL
                    +cloudinaryImageId
                }
            />
            <h3 className="py-2 font-bold text-lg">{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const vegRestaurantLabel = (RestaurantCard) =>{

    return (props) =>{
        return(
            <div>
                <label className="absolute bg-green-600 text-white m-2 p-2 rounded-lg">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}
export default RestaurantCard;