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
      console.log(err)
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Ad title</label>
          <input type="text" id="title" name="title" className="border" required  onChange={handleChange} value={values.title}/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" className="border" required  onChange={handleChange} value={values.price}/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" className="border" required onChange={handleChange} value={values.description}></textarea>
        </div>
        <div>
          <label htmlFor="image">Photo</label>
          <input type="text" id="image" name="image" className="border" required  onChange={handleChange} value={values.image}/>
        </div>
        <button type="submit" className="bg-green-500 px-2 py-1 rounded-md cursor-pointer text-white">{isSubmitting ? "Post..." : "Post"}</button>
      </form>
    </>
  )
}

export default PostAd