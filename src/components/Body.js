import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useState } from "react";


    
const Body=()=>{
    const arr=useState(resObj);

    // const[listOfRestaurant,setListOfRestaurant]=arr;

    const listOfRestaurant=arr[0];
    const setListOfRestaurant=arr[1];

    // const[listOfRestaurant,setListOfRestaurant]=useState(resObj);

   
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{

                    const filteredList=listOfRestaurant.
                    filter((res)=> res.info.avgRating>4);
                    // console.log(listOfRestaurant);
                    setListOfRestaurant(filteredList);
                }}
                    >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {

                    listOfRestaurant.map((restaurant)=> (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
                
                {/* here ther is a lot of restaurant if you want to show the card of kFC and other things how will 
                you do that here we introduce props */}
            </div>
        </div>
    )
}
export default Body;