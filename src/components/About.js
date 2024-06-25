import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent-constructor");
    }

    componentDidMount(){
        console.log("parent-componentDidMount");
    }

    render(){
        console.log("parent-render")
        return(
            <div className="about">
                <User name={"Rahul Jha from function"} location={"Kolkata from function"}/>
                <UserClass name={"Rahul Jha from class"} location={"Kolkata from class"} />
            </div>
        )
    }

}

export default About;