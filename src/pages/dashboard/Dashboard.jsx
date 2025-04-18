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
    }else{
      navigate("/dashboard/my-account")
    }
  },[navigate])

  return (
    <>
      <main className="container mx-auto flex gap-4 p-4">
        <section className="w-64 flex flex-col gap-2">
          <NavLink
            to="/dashboard/my-account"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`
            }
          >
            My Account
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/ads"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`
            }
          >
            Ads
          </NavLink>
          <NavLink
            to="/dashboard/post-ad"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`
            }
          >
            Post Ad
          </NavLink>
          <button className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-1 border-red-500 border transition-all duration-200 ease-in-out" onClick={logOut}>Log out</button>
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
