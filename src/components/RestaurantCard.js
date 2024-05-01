import { CDN_URL } from "../utils/constants";


const styleCard={
    backgroundColor: "#f0f0f0"
}

const RestaurantCard=(props)=>{
    const{resData}=props;
    const{ name,locality,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    return(
        <div className="res-card" style={styleCard}>
            <img  className= "res-logo" alt= "res-logo" src={CDN_URL+cloudinaryImageId}>

            </img>
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
           
        </div>
    )
}
export default RestaurantCard;