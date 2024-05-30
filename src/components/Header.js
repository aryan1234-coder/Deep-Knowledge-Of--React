import { LoGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header=()=>{

    // const btnName="Login";
    //if there is no dependency array in useEffect =>use Effect is called everytime when component is rendered
    // if dependency array is empty =[]=useEffect is called on initial rendered

    //if dependency array is [btnNameReact]=> useEffect is called everytime btnName is updated
    // const[btnNameReact,setBtnNameReact]=useState("Login")
    console.log("header Rendered")

    useEffect(()=>{
        console.log("UseEffect called")
    })

    const onlineStatus=useOnlineStatus()
    //subscribing a store using a selector
    const cart=useSelector((store)=>store.cart.items)

    const {loggedInUser} =useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-100 sm:bg-yellow-200 lg:bg-green-200 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-40" src={LoGO_URL}/>

            </div>
            <div className="flex items-center">
                <ul className="flex p-8 m-8">
                    <li className="px-4">
                        Online Status: {onlineStatus==true?"✅":"🔴"}
                    </li>
                    <li className="px-4">

                    <Link to="/">Home</Link>
                        </li>
                    <li className="mx-4">
                    <Link to="grocery"> Grocery Page </Link>
                        {/* here we can'nt use href tag because it is loading the whole page */}
                        </li>
                        <li className="px-4">
                    <Link to="about"> About </Link>
                        {/* here we can'nt use href tag because it is loading the whole page */}
                        </li>
                    <li className="px-4">
                       <Link to="contact"> Contact Us</Link>
                       {/* in this Link it is not reloading the whole page  */}
                        </li>

                        {/* that's why is called Single Page Application */}
                    <li className="px-4 font-bold text-xl"><Link to="/cart" >Cart ({cart.length} items</Link>)</li>
                   <button className="font-bold" ><Link to="/login">

                    SignUp Page</Link></button>
                    <li className=" font-bold px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;