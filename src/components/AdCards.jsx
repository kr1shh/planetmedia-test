import { useEffect, useState } from "react";
import publicRequest from "../services/publicRequest";
import { useNavigate } from "react-router";
import authRequest from "../services/authRequest";
import toast from "react-hot-toast";


const AdCards = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const deleteAd = async(id) => {
    try{
      setLoading(true)
      await authRequest.delete(`/api/advertisements/${id}`)
      toast.success("Ad deleted successfully")
      fetchAds()
    }catch(err){
      console.error(err)
      toast.error("Something went wrong!")
    }finally{
      setLoading(false)
    }
  }

  const fetchAds = async () => {
    try {
      setLoading(true);
      const userData = JSON.parse(localStorage.getItem('user'));
      const { id : userId} = userData;
      const response = await publicRequest.get("/api/advertisements");
      const userAds = response.data.filter((ad)=>ad.owner.id === userId )
      setAds(userAds);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          ads.map((ad) => (
            <div
              key={ad.id}
              className="w-full flex items-start justify-center gap-3"
            >
              <div className="w-[100px] h-[100px] overflow-hidden rounded-md">
                <img
                  src={ad.image}
                  alt="test"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400";
                  }}
                />
              </div>
              <div className="grow">
                <h1>{ad.title}</h1>
                <p>{ad.description}</p>
                <p>{ad.price}</p>
              </div>
              <div>
                <button className="border border-blue-500 p-2 text-blue-500" onClick={()=>{navigate(`/ads/${ad.id}`)}}>
                  View
                </button>
                <button className="border border-red-500 p-2 text-red-500" onClick={()=>{deleteAd(ad.id)}}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdCards;
