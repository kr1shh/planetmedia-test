import { useNavigate } from "react-router"
import navLogo from "../assets/logoForWhite.png"


const NavBar = () => {
    const navigate = useNavigate()

  return (
    <>
        <nav className="flex justify-between items-center py-4 px-4 bg-white drop-shadow-xl">
            <div className="container mx-auto flex items-center justify-between">
                <img src={navLogo} alt="logo" className="w-32"/>
                <div className="flex gap-3">
                    <button className="border border-gray-200 rounded-[50px] px-6 py-2 cursor-pointer" onClick={()=>navigate("/login")}>
                        Sign In
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