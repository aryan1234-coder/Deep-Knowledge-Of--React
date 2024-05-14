import React from "react";
// import {React.Component} from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
            name:"Dummy Data",
            location:"Default",
            avatar_url:"http://dummy",

            }
            
        }
        // console.log("Constructor Child");
    }
  

   async componentDidMount(){
        // console.log("UseClass Child Componentdidmount")
        // now we used to get an api call
        const data=await fetch("https://api.github.com/users/aryan1234-coder")
        const json= await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);


    }
    render(){

        const {name,location,avatar_url}=this.state.userInfo;

        // console.log("Child render is called")
        return(
            <div className="user-card">
                {/* <h1>Count:{this.state.count}</h1> */}
                {/* <h1>Count:{this.state.count1}</h1> */}
                {/* <button onClick={()=>{
                    //never update state variable directly
                    // like this this.state.ount=this.state.count+1
                    this.setState({
                        count:this.state.count+1,
                    })

                }}>cOUNT INCREASE</button> */}
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:aryansachan2017@gmail.com</h4>
            </div>
            
        )
    }
    

}
export default UserClass;