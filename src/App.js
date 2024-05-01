import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// You need three components:


// Header-
// -in this you contains logo
// -Nav items
// Body 
// -Search Bar
// Restaurant container 
// -- Restaurant Card 
// image
// star rating
//cuisines 
//etc

// Footer-

// Copyrights
// Links
// Address
// Contact


// const jsxHeading=(<h1 className="head" 
// tabIndex="5 delievery time" >Namaste React using JSX</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// const Title=()=>(
//     <h1 className="head">
//         Title Component
//     </h1>
// )

// const number=1000;

// const HeadingComponent=()=>(
//     <div id="container">
//         {Title()}
//         {/* this is aslo written i */}
//         {number}
//      <h1 className="heading">Aryan Sachan Sachan</h1>
//     </div>
// )


const styleCard={
    backgroundColor: "#f0f0f0"
}

// this second method is called destructure
// const RestaurantCard=({esName,cuisines})=>{
    // const{resName,cuisines}=props
//     return(
//         <div className="res-card" style={styleCard}>
//             <img  className= "res-logo" alt= "res-logo" src="https://th.bing.com/th/id/R.38cfd8403144119e8d3e3d176a963016?rik=aIKV8RSzKHPIKw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fDesktop-Food-HD-Wallpapers-Free-Download.jpg&ehk=szmS7%2bieRDd4VVw82%2fkxoSha9HiVHqUNAZr02wqxugc%3d&risl=1&pid=ImgRaw&r=0">

//             </img>
//             <h3>{resName}</h3>
//             <h4>{cuisines}</h4>
//             <h5>4.4 stars</h5>
//             <h6>Delievery time</h6>
//         </div>
//     )
// }





const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

