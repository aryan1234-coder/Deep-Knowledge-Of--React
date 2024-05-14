import { useState } from "react";


const User=(props)=>{

    // const[count,setCount]=useState(0);
    
    return (
        <div className="user-card">
            {/* <h1>Count:{count}</h1> */}
          
            {/* <button onClick={()=>{
                const c=count+1;
                setCount(c);
            }}>CountButton</button> */}
            <h2>Name: {props.name}</h2>
            <h3>Location :Bangalore</h3>
            <h4>Contact:aryansachan2017@gmail.com</h4>
        </div>
    )
   
}
export default User;