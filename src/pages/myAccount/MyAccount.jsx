import { useEffect, useState } from "react";
import AdCards from "../../components/AdCards";
import { useNavigate } from "react-router";
import { AtSign, MapPin, Phone } from "lucide-react";

const MyAccount = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
      <div className="max-h-[95vh]">
        <div className="flex flex-col gap-2 w-full p-3 bg-white rounded-2xl">
          <div className="flex items-center gap-2 w-full justify-between border-b border-gray-300 p-3">
            <div className="flex items-center gap-4">
              <div className="w-[80px] h-[80px] overflow-hidden rounded-full">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="test"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">
                  {user.username || "Name not available"}
                </h3>
                <p className="font-light text-sm text-gray-600">
                  {formatDate(user.createdAt)}
                </p>
              </div>
            </div>
            <button
              className="cursor-pointer border border-gray-400 text-primary px-4 py-3 rounded-[50px] hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => navigate("/dashboard/profile")}
              title="Edit profile"
            >
              Edit profile
            </button>
          </div>
          <div className="flex items-start gap-2 w-full p-3">
            <div>
              <p className="flex items-center justify-center text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                &nbsp;{user.location || "Location not set"}
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center text-sm text-gray-500">
                <AtSign className="w-4 h-4" />
                &nbsp;{user.email || "Email not available"}
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center text-sm text-gray-500">
                <Phone className="w-4 h-4" />
                &nbsp;{user.phone || "Phone not set"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-y-auto mt-5">
          <AdCards />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
