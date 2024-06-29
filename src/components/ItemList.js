import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) =>{
    console.log(items)
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div>
                            <span className="font-medium">{item.card.info.name}</span>
                            <p className="font-medium"> ₹ {item.card.info.price ? (item.card.info.price/100) : (item.card.info.defaultPrice/100)}</p>
                        </div>
                        <p className="text-xs pt-5">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <button className="bg-white text-green-600 absolute border px-2 py-1 font-bold text-lg">Add +</button>
                        <img src={CDN_URL+item?.card?.info?.imageId} className="w-full"/>
                        
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ItemList;