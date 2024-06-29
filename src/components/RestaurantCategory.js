import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    console.log(data);
    const handleClick = () =>{
        setShowIndex();
    }

    return(
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
            {/*Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title}({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
                {/*Accordian Body */}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;