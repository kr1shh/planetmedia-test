import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate()
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
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
