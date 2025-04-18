

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <div className="flex flex-col gap-1 items-start justify-start mt-3">
        <label htmlFor="username">username</label>
        <input type="text" id="username" name="username" className="border"/>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start mt-3">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="border"/>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start mt-3">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="border"/>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Register
      </button>
    </>
  )
}

export default Register