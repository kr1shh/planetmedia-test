import toast from "react-hot-toast"
import useForm from "../../hooks/useForm"
import authRequest from "../../services/authRequest"
import { useNavigate } from "react-router"


const PostAd = () => {
  const { values, setSubmitting, isSubmitting, handleChange, resetForm }  = useForm({
    title : "",
    price : "",
    description : "",
    image : ""
  })

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setSubmitting(true)
    try{
      const response = await authRequest.post("/api/advertisements", values)
      if(response.status === 200){
        toast.success("Ad posted successfully")
      }
      resetForm()
    }catch(err){
      if(err.status === 401){
        toast.error("Please login")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setTimeout(()=>{
          navigate("/login")
        },700)
      }else{
        toast.error(err.response.data.error.message)
      }
    }finally{
      setSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full h-full gap-6 flex items-center justify-center bg-white flex-col p-4 rounded-lg">
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="title" className="text-base text-gray-600">Ad title <span className="text-accent">*</span></label>
          <input type="text" id="title" name="title" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required  onChange={handleChange} value={values.title}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="price" className="text-base text-gray-600">Price <span className="text-accent">*</span></label>
          <input type="text" id="price" name="price" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required  onChange={handleChange} value={values.price}/>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="description" className="text-base text-gray-600">Description <span className="text-accent">*</span></label>
          <textarea name="description" id="description" className="h-32 border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required onChange={handleChange} value={values.description}></textarea>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label htmlFor="image" className="text-base text-gray-600">Photo <span className="text-accent">*</span></label>
          <input type="text" id="image" name="image" className="border border-gray-400 rounded-xl p-3 focus:border-accent focus-visible:border-accent focus:outline-0 focus-visible:outline-0" placeholder="Type here." required  onChange={handleChange} value={values.image}/>
        </div>
        <button type="submit" className="bg-accent py-3 rounded-[50px] w-[70%] text-white mt-3">{isSubmitting ? "Post..." : "Post"}</button>
      </form>
    </>
  )
}

export default PostAd