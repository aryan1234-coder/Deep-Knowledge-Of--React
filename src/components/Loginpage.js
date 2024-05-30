
const Loginpage=()=>{

    return(
        <div className="text-center">
        <h1 className="font-bold text-3xl p-4 m-4"> This is Login Page</h1>
        <form>
            <input type="text" className=" border border-black p-2 m-4" placeholder="emailId">
             
            </input>
            <label>Email ID</label>
            <br></br>
         
            <input type="password" className= " border border-black p-2 m-4" >
              
            </input>
            <label>Password</label>

            <button className=" border border-black p-2 m-4 bg-gray-100 rounded-lg">Submit</button>
        </form>
    </div>
    )
}

export default Loginpage;