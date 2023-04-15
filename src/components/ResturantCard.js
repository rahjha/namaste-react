import { CDN_URL } from "./config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-60 p-2 m-2 shadow-lg bg-pink-50">
      <img alt="Cuisine Logo" src={CDN_URL + props.data.cloudinaryImageId} />
      <h2 className="font-bold text-lg">{props.data.name}</h2>
      <h3>{props.data.cuisines.join(", ")}</h3>
      <h4>{props.data.costForTwoString}</h4>
      <h5>
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default ResturantCard;
