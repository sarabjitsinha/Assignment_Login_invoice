import { useNavigate } from "react-router-dom";

function Header(){
    const navigate=useNavigate()

    return(
        <header className="bg-blue-200">
            
            <nav className=" list-none flex gap-5 justify-end">
            <span className=" hover:cursor-pointer" onClick={()=>navigate("/home")}>Home</span>
                <li>Vendor Details</li>
                <li>Invoice Details</li>
                <li>Comments</li>
            </nav>

        </header>
    )
}

export default Header;