import { CDN_URL } from "./config";
const FoodItem = ({ name, descrition, imageId, price }) => {
  console.log("description :", descrition);
  return (
    <div className="w-60 p-2 m-2 shadow-lg bg-pink-50">
      <img alt="Cuisine Logo" src={CDN_URL + imageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{descrition}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
