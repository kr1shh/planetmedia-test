import { useEffect, useState } from "react";
import publicRequest from "../services/publicRequest";
import { useNavigate } from "react-router";
import authRequest from "../services/authRequest";
import toast from "react-hot-toast";
import LoaderState from "./LoaderState";

const AdCards = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const deleteAd = async (id) => {
    try {
      setLoading(true);
      await authRequest.delete(`/api/advertisements/${id}`);
      toast.success("Ad deleted successfully");
      fetchAds();
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const fetchAds = async () => {
    try {
      setLoading(true);
      const userData = JSON.parse(localStorage.getItem("user"));
      const { id: userId } = userData;
      const response = await publicRequest.get("/api/advertisementss");
      const userAds = response.data.filter((ad) => ad.owner.id === userId);
      setAds(userAds);
    } catch (err) {
      toast.error(err.response.data.error.message);
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
          <LoaderState />
        ) : ads.length === 0 ? (
          <h1 className="text-center mt-10">No ads found.</h1>
        ) : (
          ads.map((ad) => (
            <div
              key={ad.id}
              className="w-full flex items-start justify-center gap-3 bg-white rounded-2xl p-6"
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
                <h1 className="text-xl font-semibold">{ad.title}</h1>
                <p className="text-sm text-gray-600">{ad.description}</p>
                <p className="mt-3 text-xl font-medium">₹{ad.price}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="border border-gray-500/20 px-4 py-3 rounded-[50px] text-primary cursor-pointer"
                  onClick={() => {
                    deleteAd(ad.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="border border-accent px-4 py-3 rounded-[50px] text-white bg-accent cursor-pointer"
                  onClick={() => {
                    navigate(`/ads/${ad.id}`);
                  }}
                >
                  View
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
