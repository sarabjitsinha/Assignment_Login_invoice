/* eslint-disable react-refresh/only-export-components */
import { createContext,useState } from "react";

export const Mycontext=createContext({})
const user=localStorage.getItem("Name")

function Myprovider({children}){
    const [name,setName]=useState(user)
    const [isLoggedin,setIsloggedin]=useState(false)
    
    console.log(isLoggedin)
    
    return(

        <Mycontext.Provider value={{isLoggedin,setIsloggedin,name,setName}}>
            {children}
        </Mycontext.Provider>
    )
}

export default Myprovider;