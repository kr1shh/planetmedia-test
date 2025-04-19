import toast from "react-hot-toast"
import useForm from "../../hooks/useForm"
import authRequest from "../../services/authRequest"



const Profile = () => {
  const { values,handleChange,isSubmitting,resetForm,setSubmitting } = useForm({
    firstName : "",
    lastName : "",
    email : "",
    username : "",
    location : "",
    phone : ""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      setSubmitting(true)
      const response = await authRequest.put("/api/profile",values)
      console.log(response);
      resetForm()
      toast.success("Profile updated successfully")
      localStorage.setItem("user",JSON.stringify(response.data))
    }catch(err){
      console.log(err)
    }finally{
      setSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" className="border" required onChange={handleChange} value={values.firstName}/>
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" className="border" required onChange={handleChange} value={values.lastName}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="border" required onChange={handleChange} value={values.email}/>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="border" required onChange={handleChange} value={values.username}/>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" className="border" required onChange={handleChange} value={values.location}/>
        </div>
        <div>
          <label htmlFor="phone">Contact number</label>
          <input type="number" id="phone" name="phone" className="border" required onChange={handleChange} value={values.phone}/>
        </div>
        <button type="submit">{ isSubmitting ? "Updating..." : "Save" }</button>
      </form>
    </>
  )
}

export default Profile