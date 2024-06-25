import { useEffect } from "react";

const User = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("NAMASTE REACT OP");
        }, 1000);

        return () =>{
            clearInterval(timer);
        }
    },[])

    const {name, location} = props;
    return(
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @rahjha</h4>
        </div>
    )
}
export default User;