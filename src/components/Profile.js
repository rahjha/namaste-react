import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  useEffect(() => {
    console.log("Inside useEffect");
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Inside useEffect cleanup");
    };
  });

  console.log("inside render");
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name :{props.name}</h3>
    </div>
  );
};

export default Profile;
