import { useNavigate } from "react-router-dom";
import { Mycontext } from "./utils/Myprovider";
import { useContext } from "react";

function Header(){
    const navigate=useNavigate();
    const {setIsloggedin}=useContext(Mycontext)
    const loggeduser=localStorage.getItem("loggedin")
    function handleLogout(){
        localStorage.removeItem("Name")
        localStorage.setItem("loggedin",false)
        setIsloggedin(false)
        navigate("/")
    }
    console.log(loggeduser)
    return(
        <header className="bg-blue-200">
            
            <nav className=" list-none flex gap-5 justify-end">
            <span className=" hover:cursor-pointer" onClick={()=>navigate("/home")}>Home</span>
                <li>Vendor Details</li>
                <li>Invoice Details</li>
                <li>Comments</li>
                <span onClick={()=>handleLogout()} className=" hover:cursor-pointer">{loggeduser==="true" ? "Logout":null}</span>
            </nav>

        </header>
    )
}

export default Header;