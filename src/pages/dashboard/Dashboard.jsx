import { useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink, Outlet, useNavigate } from "react-router-dom";



const Dashboard = () => {
  const navigate = useNavigate()

  const logOut = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
    toast.success("Logged out successfully")
  }

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
      toast.error("Please login to access this page")
    }else{
      navigate("/dashboard/my-account")
    }
  },[navigate])

  return (
    <>
      <main className="container mx-auto flex gap-4 p-4">
        <section className="w-72 flex flex-col gap-4 bg-white rounded-lg p-4 pt-10">
          <NavLink
            to="/dashboard/my-account"
            className={({ isActive }) =>
              `px-5 py-3 rounded-[50px] ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-700 border border-transparent hover:border-gray-400 "
              }`
            }
          >
            My Account
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `px-5 py-3 rounded-[50px] ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-700 border border-transparent hover:border-gray-400 "
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/ads"
            className={({ isActive }) =>
              `px-5 py-3 rounded-[50px] ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-700 border border-transparent hover:border-gray-400 "
              }`
            }
          >
            Ads
          </NavLink>
          <NavLink
            to="/dashboard/post-ad"
            className={({ isActive }) =>
              `px-5 py-3 rounded-[50px] ${
                isActive
                  ? "bg-accent text-white"
                  : "bg-transparent text-accent border border-transparent hover:border-accent "
              }`
            }
          >
            Post Ad
          </NavLink>
          <button className="text-red-500 hover:text-white hover:bg-red-500 px-4 py-3 border-red-500 border transition-all duration-200 ease-in-out rounded-[50px]" onClick={logOut}>Log out</button>
        </section>
        <section className="w-full min-h-[83vh] overflow-y-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
