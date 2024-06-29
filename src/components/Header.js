import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState("login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    console.log(data);

    return(
        <div className="flex justify-between bg-orange-50">
            <div className="logoContainer">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex px-4 m-4" >
                    <li className="px-4">{(onlineStatus===false)?'🔴':'🟢'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")
                    }}>{btnNameReact}</button>
                    <li className="ml-2">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;