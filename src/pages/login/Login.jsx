
const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div className="flex flex-col items-start justify-start gap-2">
        <label htmlFor="email">Email</label>
        <input className="border" type="email" id="email" name="email" />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <label htmlFor="password">Password</label>
        <input className="border" type="password" id="password" name="password" />
      </div>
    </>
  )
}

export default Login