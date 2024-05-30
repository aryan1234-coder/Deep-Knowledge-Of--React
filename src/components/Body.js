import resObj from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/mockdata";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
// import { labelRestaurantCard } from "./RestaurantCard";


    
const Body=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState([]);

    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

    const[ searchText,setSearchText]=useState("");

    // const OfferRestaurantCard=labelRestaurantCard(RestaurantCard);


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
    console.log(listOfRestaurant);

    // console.log("Body Rendered") firstly  this will be called then useEffect callback function will be called

    // const[listOfRestaurant,setListOfRestaurant]=useState(resObj);

// This is below called Conditional Rendendring on the basis of any condition your page will rendering on condition

const onlineStatus=useOnlineStatus();
if(onlineStatus==false){
    return<h1>Look Like You are Offline!! Please Check Your Internet Connection Thank You!!!</h1>
}

const {setuserInfo,loggedInUser}=useContext(UserContext);
    if(listOfRestaurant.length==0){
        return <Shimmer/>
    }

   
    return(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid 1px border-black " value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"   onClick={()=>{
                      const  filteredRestaurant= listOfRestaurant.filter((res)=> res.info.name
                      .toLowerCase().includes(searchText.toLowerCase()));
                    
                    setFilteredRestaurant(filteredRestaurant);
                    
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{

                    const filteredList=listOfRestaurant.
                    filter((res)=> res.info.avgRating>4.1);
                    // console.log(listOfRestaurant);
                    setListOfRestaurant(filteredList);
                }}
                    >Top Rated Restaurant</button>
                    </div>
                    <div className="search m-4 p-4 flex items-center">
                      <label>UserName :</label>
                      <input type= "text" className="Border border-black p-2 " value={loggedInUser} onChange={(e)=>setuserInfo(e.target.value)}/>
                    </div>
            </div>
            <div className=" flex flex-wrap">
                {

                    filteredRestaurant.map((restaurant)=> (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}
                    
                    >{
                        // restaurant.info.aggregatedDiscountInfoV3.header===""? 
                        <RestaurantCard  resData={restaurant} />
                        


                    }
                        </Link>))
                    
                }
                {/* RestaurantCard  resData={restaurant} */}
                {/* here ther is a lot of restaurant if you want to show the card of kFC and other things how will 
                you do that here we introduce props */}
            </div>
        </div>
    )
}
export default Body;