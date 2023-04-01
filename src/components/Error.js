import Logo from "../assets/img/SomethingWentWrong.jpg";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>{err.status + " : " + err.statusText + " : " + err.data}</h2>
      <img className="SomethingWentWrong" alt="logo" src={Logo} />
    </div>
  );
};

export default Error;
