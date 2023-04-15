import { CDN_URL } from "./config";

const ResturantCard = (props) => {
  return (
    <div className="w-60 p-2 m-2 shadow-lg bg-pink-50">
      <img alt="Cuisine Logo" src={CDN_URL + props.data.cloudinaryImageId} />
      <h2 className="font-bold text-lg">{props.data.name}</h2>
      <h3>{props.data.cuisines.join(", ")}</h3>
      <h4>{props.data.costForTwoString}</h4>
    </div>
  );
};

export default ResturantCard;
