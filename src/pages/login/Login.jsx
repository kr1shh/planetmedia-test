import { useEffect, useState } from "react";
import publicRequest from "../../services/publicRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import loginImage from "../../assets/loginSide.png";
import loginLogo from "../../assets/logoForWhite.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await publicRequest.post("/api/auth/local", {
        identifier: credentials.username,
        password: credentials.password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.jwt);
      toast.success("Logged in successfully");
      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
    } catch (err) {
      toast.error(err.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex bg-white border border-gray-300 mx-auto w-3/4 my-20 rounded-2xl">
        <div className="w-[50%] py-20">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={loginLogo} alt="login" className="w-32" />
            <p className="font-light text-sm w-3/4 text-center text-gray-500">
              <span className="font-bold">Listbnb</span> a Largest Classified
              Listing Marketplace offers perfect Ads classifieds...
            </p>
            <h1 className="text-xl font-medium">Log in to your account</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="email" className="text-base text-gray-600">
                Email <span className="text-accent">*</span>
              </label>
              <input
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                type="email"
                id="email"
                name="username"
                onChange={handleChange}
                value={credentials.email}
              />
            </div>
            <div className="mt-3 flex flex-col gap-2 w-[70%]">
              <label htmlFor="password" className="text-base text-gray-600">
                Password <span className="text-accent">*</span>
              </label>
              <input
                className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <button
                type="submit"
                className="bg-accent text-white cursor-pointer px-5 py-2 rounded-[50px] mt-6"
                onClick={handleSubmit}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
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
            className="bg-accent text-white cursor-pointer px-5 py-2 rounded-[50px]"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
