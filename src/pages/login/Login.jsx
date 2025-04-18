import { useState } from "react"
import publicRequest from "../../services/publicRequest"


const Login = () => {
  const [ credentials,setCredentials ] = useState({
    username : "",
    password : ""
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try{
      const res = await publicRequest.post("/api/auth/local",{
        identifier : credentials.username,
        password : credentials.password
      })
      localStorage.setItem("jwt",res.data.jwt)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div className="flex flex-col items-start justify-start gap-2">
        <label htmlFor="email">Email</label>
        <input className="border" type="email" id="email" name="username" onChange={handleChange} value={credentials.email}/>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <label htmlFor="password">Password</label>
        <input className="border" type="password" id="password" name="password" onChange={handleChange} value={credentials.password}/>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Login</button>
      </div>
    </>
  )
}

export default Login