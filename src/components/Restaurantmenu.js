import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurantmenu=()=>{



    // const[resInfo,setResInfo]=useState(null);

    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);
    // that's called  Custom React Hook
    // useEffect(()=>{
    //        fetchMenu();
    // },[]);


    // const fetchMenu=async()=>{
    //     const data=await fetch( MENU_API+resId
          
    //     );
    //      const json=await data.json();
    //      setResInfo(json.data);
    // }
    if(resInfo==null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

    return  (

        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>Menu</h4>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - {" Rs."}{item.card.info.price/100}</li>)}
                <br></br>
                {/* <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[3]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[4]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[5]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[6]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[7]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[8]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[9]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[10]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[11]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[12]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[13]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[14]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[15]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[16]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[17]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[18]?.card?.info?.name}</li>
                <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[19]?.card?.info?.name}</li> */}
                

            </ul>
            {/* <h4>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</h4> */}
        </div>
    )
}
export default Restaurantmenu;