import { LoGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header=()=>{

    // const btnName="Login";
    //if there is no dependency array in useEffect =>use Effect is called everytime when component is rendered
    // if dependency array is empty =[]=useEffect is called on initial rendered

    //if dependency array is [btnNameReact]=> useEffect is called everytime btnName is updated
    const[btnNameReact,setBtnNameReact]=useState("Login")
    console.log("header Rendered")

    useEffect(()=>{
        console.log("UseEffect called")
    })

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LoGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                        </li>
                    <li>
                    <Link to="about"> About </Link>
                        {/* here we can'nt use href tag because it is loading the whole page */}
                        </li>
                    <li>
                       <Link to="contact"> Contact Us</Link>
                       {/* in this Link it is not reloading the whole page  */}
                        </li>

                        {/* that's why is called Single Page Application */}
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