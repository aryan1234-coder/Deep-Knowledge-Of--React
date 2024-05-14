import User from "./User";
import UserClass from "./UserClass";
import React  from "react";


class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent ComponenntDidMount")
    }
   render(){

    console.log("Parent Render")
    return (
        <div>
            <h1>About</h1>
            <h2>This is about Component</h2>

            {/* <User name={"Aryan Sachan (Function)"}/> */}
            <UserClass name={"Aryan Sachan (Class)"}/>
            {/* <UserClass name={"Aryan Sachan (Class)"}/> */}
        </div>
    )
   }
}
export default About;