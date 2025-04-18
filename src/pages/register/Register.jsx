import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import publicRequest from "../../services/publicRequest"


const Register = () => {
  const [ user,setUser ] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [ loading,setLoading ] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
      try{
        setLoading(true)
        const response = await publicRequest.post("/api/auth/local/register",{
          "username" : user.username,
          "email" : user.email,
          "password" : user.password
        })
        
        localStorage.setItem("token",response.data.jwt)
        toast.success("Registered successfully")
        setTimeout(()=>{
          navigate("/dashboard")
        },700)
      }catch(err){
        toast.error(err.response.data.error.message)
        console.log(err)
      }finally{
        setLoading(false)
      }
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 items-start justify-start mt-3">
          <label htmlFor="username">username</label>
          <input type="text" id="username" name="username" className="border" required onChange={handleChange} value={user.username}/>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start mt-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="border" required onChange={handleChange} value={user.email}/>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start mt-3">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="border" required onChange={handleChange} value={user.password}/>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  )
}

export default Register