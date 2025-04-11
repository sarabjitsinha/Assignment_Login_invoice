/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [userName,setUsername]=useState("")
    const [psswd,setPsswd]=useState("") 
    const navigate=useNavigate() 
    
    function handleSubmit(){
        localStorage.setItem("Name",userName);
        navigate("/home")
    }
    
    return(

        <div className="flex items-center justify-center p-2 ">
            <div className="m-auto">
            <label htmlFor="username">Enter Username</label>
            <br />
            <input type="text" 
            name="username" 
            id="username" 
            className=" outline-1"
            autoComplete="off"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password">Enter password</label>
            <br />
            <input type="password" 
            name="password" 
            id="password" 
            className="outline-1"
            autoComplete="off"
            onChange={(e)=>setPsswd(e.target.value)}
            />
            <br/>
            <button type="submit" onClick={handleSubmit} className="bg-blue-500 p-1 rounded-full mt-1">submit</button>
            </div>
            
        </div>
    )
}


export default Login;