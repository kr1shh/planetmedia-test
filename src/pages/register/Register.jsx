import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import publicRequest from "../../services/publicRequest";
import loginImage from "../../assets/loginSide.png";
import loginLogo from "../../assets/logoForWhite.png";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (user.password !== user.cpassword) {
        toast.error("Password does not match");
        return;
      }
      const response = await publicRequest.post("/api/auth/local/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Registered successfully");
      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
    } catch (err) {
      toast.error(err.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex bg-white border border-gray-300 mx-auto w-3/4 my-20 rounded-2xl">
        <div className="w-[50%] py-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={loginLogo} alt="login" className="w-32" />
            <p className="font-light text-sm w-3/4 text-center text-gray-500">
              <span className="font-bold">Listbnb</span> a Largest Classified
              Listing Marketplace offers perfect Ads classifieds...
            </p>
            <h1 className="text-xl font-medium">Create your account</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="username" className="text-base text-gray-600">
                username <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                required
                onChange={handleChange}
                value={user.username}
              />
            </div>
            <div className="mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="email" className="text-base text-gray-600">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                required
                onChange={handleChange}
                value={user.email}
              />
            </div>
            <div className=" mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="password" className="text-base text-gray-600">
                Password <span className="text-accent">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                required
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <div className=" mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="cpassword" className="text-base text-gray-600">
                Confirm Password <span className="text-accent">*</span>
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                required
                onChange={handleChange}
                value={user.cpassword}
              />
            </div>
            <button
              className="bg-accent py-3 rounded-[50px] w-[70%] text-white mt-6"
              type="submit"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
        <div className="w-[50%] bg-accent/5 flex flex-col items-center justify-center gap-3 p-6">
          <div className="w-[200px] h-[200px]">
            <img
              src={loginImage}
              alt="login"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-base text-primary font-medium">
            Already have an account <span className="text-accent">?</span>
          </h1>
          <p className="text-center text-gray-500 w-3/4 text-sm">
            To connect with us please login to our account if you are having one
            already.
          </p>
          <button
            className="bg-accent text-white cursor-pointer px-5 py-3 rounded-[50px]"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
