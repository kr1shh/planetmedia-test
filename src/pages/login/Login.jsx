import { useState } from "react";
import publicRequest from "../../services/publicRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


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
      localStorage.setItem("user",JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.jwt);
      toast.success("Logged in successfully");
      setTimeout(()=>{
        navigate("/dashboard")
      },700)
    } catch (err) {
      toast.error(err.response.data.error.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-start gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="email"
            id="email"
            name="username"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border"
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
