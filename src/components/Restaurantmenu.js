import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API ,REMAINING} from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurantmenu=()=>{



    const[resInfo,setResInfo]=useState(null);
    const[showIndex,setShowIndex]=useState(null);

    const {resId}=useParams();

    // const resInfo=useRestaurantMenu(resId);
    // that's called  Custom React Hook
    useEffect(()=>{
           fetchMenu();
    },[]);


    const fetchMenu=async()=>{
        const data=await fetch( MENU_API+resId
          
        );
         const json=await data.json();
         setResInfo(json.data);
    }
    if(resInfo==null) return <Shimmer/>;
   

    const{name,cuisines}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return  (
        <div className="text-center">

        {/* <div> */}
        {/* m-4 p-4 w-[250px] */}
            {/* <img  className=" rounded-lg m-4 p-4 w-[250px]  bg-gray-100 hover:bg-gray-200"  src={CDN_URL+ cloudinaryImageId }></img> */}
            <h1 className="font-bold my-6 text-2xl">{name}</h1>

            <p className="font-bold">{cuisines.join(", ")}</p>
            {categories.map((category,index)=>(
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}/>
))}
            {/* <h3>{costForTwoMessage}</h3> */}
            {/* <h4>Menu</h4> */}
            {/* <div >
                {itemCards.map((item)=><li key={item.card.info.id}>
                    
                    <div className="font-bold py-2">{item.card.info.name}</div>
                    <div> - {" Rs."}{item.card.info.price/100}</div>
                    </li>)}
                <br></br>
                {/* <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>
                    
                    {item.card.info.name} - {" Rs."}{item.card.info.price/100}</li>)}
                // <br></br> */} 
               
                
                {/* <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[18]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[19]?.card?.info?.name}</li> */}
                 {/* */} 

           
        </div>
    )

}
export default Restaurantmenu;