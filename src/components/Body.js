import resObj from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


    
const Body=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState([]);

    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

    const[ searchText,setSearchText]=useState("");


    // const[listOfRestaurant,setListOfRestaurant]=arr;

    // const listOfRestaurant=arr[0];
    // const setListOfRestaurant=arr[1];

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(
                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json()
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // console.log("Body Rendered") firstly  this will be called then useEffect callback function will be called

    // const[listOfRestaurant,setListOfRestaurant]=useState(resObj);

// This is below called Conditional Rendendring on the basis of any condition your page will rendering on condition
    if(listOfRestaurant.length==0){
        return <Shimmer/>
    }

   
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                      const  filteredRestaurant= listOfRestaurant.filter((res)=> res.info.name
                      .toLowerCase().includes(searchText.toLowerCase()));
                    
                    setFilteredRestaurant(filteredRestaurant);
                    
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{

                    const filteredList=listOfRestaurant.
                    filter((res)=> res.info.avgRating>4.1);
                    // console.log(listOfRestaurant);
                    setListOfRestaurant(filteredList);
                }}
                    >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {

                    filteredRestaurant.map((restaurant)=> (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
                
                {/* here ther is a lot of restaurant if you want to show the card of kFC and other things how will 
                you do that here we introduce props */}
            </div>
        </div>
    )
}
export default Body;