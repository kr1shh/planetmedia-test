import { useEffect, useState } from "react";
import AdCards from "../../components/AdCards";
import { useNavigate } from "react-router";


const MyAccount = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <h1>My Account</h1>
      <div className="max-h-[95vh]">
        <div className="flex flex-col gap-2 w-full border p-3 border-gray-300 rounded-2xl">
          <div className="flex items-center gap-2 w-full justify-between border-b border-gray-300 p-3">
            <div className="flex items-center gap-2">
              <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="test"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3>{user.username || "Name not available"}</h3>
                <p>{formatDate(user.createdAt)}</p>
              </div>
            </div>
            <button className="cursor-pointer border border-blue-500 p-2 text-blue-500" onClick={()=>navigate("/dashboard/profile")} title="Edit profile">Edit</button>
          </div>
          <div className="flex items-start gap-2 w-full p-3">
            <div>
              <p>{user.location || "Location not set"}</p>
            </div>
            <div>
              <p>{user.email || "Email not available"}</p>
            </div>
            <div>
              <p>{user.phone || "Phone not set"}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-y-auto mt-3">
          <AdCards/>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
