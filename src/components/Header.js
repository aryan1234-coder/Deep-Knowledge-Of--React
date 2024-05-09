import { LoGO_URL } from "../utils/constants";
import { useState } from "react";


const Header=()=>{

    // const btnName="Login";
    const[btnNameReact,setBtnNameReact]=useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LoGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
               btnNameReact=="Login"?
               setBtnNameReact("Logout")
               :setBtnNameReact("Login")
                 console.log(btnNameReact)
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;