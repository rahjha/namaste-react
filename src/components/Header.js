import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodVilla.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
  //API call to check if the user is logged in or not
  return true;
};

// SPA - Single Page Application

const Title = () => {
  return (
    <Link to="/">
      <img className="h-24" alt="logo" src={Logo} />
    </Link>
  );
};

const HeaderComponent = () => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2 font-bold">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 font-bold">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 font-bold">Contact</li>
          </Link>
          <li className="px-2 font-bold">Cart</li>
          <Link to="/instamart">
            <li className="px-2 font-bold">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className="py-8">{isOnline ? "🟢" : "🔴"}</h1>
      <span className="py-8 text-red-900 font-bold">{user.name}</span>
      <div>
        {isLoggedIn ? (
          <button
            className="bg-purple-800 m-5 px-3 py-1 rounded-md text-white"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-purple-800 m-5 px-3 py-1 rounded-md text-white"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderComponent;
