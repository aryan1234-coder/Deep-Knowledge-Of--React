import { CDN_URL } from "../utils/constants";
import Header from "./Header";


// const styleCard={
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard=(props)=>{
    const{resData}=props;
    const{ name,locality,cuisines,avgRating,cloudinaryImageId,areaName,aggregatedDiscountInfoV3

    }=resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 " >
            <img  className= "rounded-lg" alt= "res-logo" src={CDN_URL+cloudinaryImageId}>

            </img>
            <h2>{areaName}</h2>
            <h2>{JSON.stringify(aggregatedDiscountInfoV3)}</h2>
            {/* <h2>{aggregatedDiscountInfoV3.map((value,key)=>
                     value.header
        )
}</h2> */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{locality}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
           
        </div>
    )
}



export default RestaurantCard;