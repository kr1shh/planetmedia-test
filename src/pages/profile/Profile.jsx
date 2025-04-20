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
      <form onSubmit={handleSubmit} className="w-full h-full gap-6 flex items-center justify-center bg-white flex-col">
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="firstName" className="text-base text-gray-600">First name <span className="text-accent">*</span></label>
          <input type="text" id="firstName" name="firstName" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.firstName}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="lastName" className="text-base text-gray-600">Last name <span className="text-accent">*</span></label>
          <input type="text" id="lastName" name="lastName" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.lastName}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="email" className="text-base text-gray-600">Email <span className="text-accent">*</span></label>
          <input type="email" id="email" name="email" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.email}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="username" className="text-base text-gray-600">Username <span className="text-accent">*</span></label>
          <input type="text" id="username" name="username" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.username}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="location" className="text-base text-gray-600">Location <span className="text-accent">*</span></label>
          <input type="text" id="location" name="location" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.location}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="phone" className="text-base text-gray-600">Contact number <span className="text-accent">*</span></label>
          <input type="number" id="phone" name="phone" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.phone}/>
        </div>
        <button type="submit" className="bg-accent py-3 rounded-[50px] w-[70%] text-white mt-3">{ isSubmitting ? "Updating..." : "Save" }</button>
      </form>
    </>
  )
}

export default Profile