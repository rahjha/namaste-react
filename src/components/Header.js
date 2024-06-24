import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState("login");

    return(
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/" className="link"><li>Home</li></Link>
                    <Link to="/about" className="link"><li>About Us</li></Link>
                    <Link to="/contact" className="link"><li>Contact Us</li></Link>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;