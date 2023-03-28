import { CDN_URL } from "./config";

const ResturantCard = (props) => {
  return (
    <div className="card">
      <img alt="Cuisine Logo" src={CDN_URL + props.data.cloudinaryImageId} />
      <h2>{props.data.name}</h2>
      <h3>{props.data.cuisines.join(", ")}</h3>
      <h4>{props.data.costForTwoString}</h4>
    </div>
  );
};

export default ResturantCard;
