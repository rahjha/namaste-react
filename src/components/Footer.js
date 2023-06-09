import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="ml-2">
      This site is developed by {user.name} - {user.email}
    </div>
  );
};

export default Footer;
