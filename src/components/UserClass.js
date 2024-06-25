import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log("child-1 constructor");
        this.state = {
            count: 0,
            count2: 2,
            userInfo :{
                name: "dummy",
                location: "dummy"
            }
        };
    }

    async componentDidMount(){

        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP");
        },1000);

        console.log("child-1 componentDidMount");

        const data = await fetch("https://api.github.com/users/rahjha");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        })
        console.log(this.state.userInfo);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render(){

        const {name, location, avatar_url} = this.state.userInfo;
        console.log("child-1 render");
        return(
            <div className="user-card">
                <h2>count : {this.state.count}</h2>
                <h2>count2 : {this.state.count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1
                    })
                }}>Increase count</button><p/>
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @rahjha</h4>
            </div>
        )
    }
}

export default UserClass;