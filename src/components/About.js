import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    console.log("Parent - constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent- ComponentDidMount");
    // Best place to make Api calls
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React live course episode 06 - Finding the path 🚀
        </p>
        <ProfileClass name={"First Child"} />
        <Profile />
      </div>
    );
  }
}

export default About;
