import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: "Dummy Avatar",
      },
    };
    console.log("Child - constructor ");
  }

  async componentDidMount() {
    console.log("Child - componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child - ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child - ComponentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Child - render ");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h1>Name :{this.state.userInfo.name}</h1>
        <h2>Location :{this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
