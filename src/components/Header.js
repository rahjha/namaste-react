import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodVilla.png";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  //API call to check if the user is logged in or not
  return true;
};

// SPA - Single Page Application

const Title = () => {
  return (
    <Link to="/">
      <img className="logo" alt="logo" src={Logo} />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li className="nav-ul-li">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-ul-li">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-ul-li">Contact</li>
          </Link>
          <li className="nav-ul-li">Cart</li>
          <Link to="/instamart">
            <li className="nav-ul-li">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <div>
        {isLoggedIn ? (
          <button className="login-logout" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="login-logout" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderComponent;
