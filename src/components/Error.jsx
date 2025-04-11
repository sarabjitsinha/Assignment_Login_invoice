import { useRouteError,useNavigate } from "react-router-dom"

function Error(){
    const err=useRouteError()
    const navigate=useNavigate()
    return(
        <div>
            <p>{err.status}</p>
            <button type="submit" onClick={()=>navigate("/home")}>Return to home</button>
        </div>
    )
}

export default Error;