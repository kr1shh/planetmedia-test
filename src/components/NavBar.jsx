import { Link, useNavigate } from "react-router"
import navLogo from "../assets/logoForWhite.png"
import { useEffect, useState } from "react"



const NavBar = () => {
    const [userName, setUserName] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("token")&&localStorage.getItem("user")){
            setUserName(JSON.parse(localStorage.getItem("user")).username)
        }
    },[])

  return (
    <>
        <nav className="flex justify-between items-center py-4 px-4 bg-white drop-shadow-xl">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={navLogo} alt="logo" className="w-32"/>
                </Link>
                <div className="flex gap-3">
                    <button className="border border-gray-200 rounded-[50px] px-6 py-2 cursor-pointer" onClick={()=>navigate("/login")}>
                        {userName ? `${userName}` : "Login"}
                    </button>
                    <button className="border border-accent bg-accent text-white rounded-[50px] px-6 py-2 cursor-pointer" onClick={()=>navigate("/dashboard/post-ad")}>
                        Post you Ad
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar