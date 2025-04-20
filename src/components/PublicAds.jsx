import { useEffect, useState } from "react";
import publicRequest from "../services/publicRequest";
import { useNavigate } from "react-router";
import { Eye, Grid2x2, List, Loader } from "lucide-react";
import toast from "react-hot-toast";

const PublicAds = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await publicRequest.get("/api/advertisements");
        setAds(response.data);
      } catch (err) {
        toast.error(err.response.data.error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center gap-3 my-4 px-4">
        <div>
          <p className="text-xl">
            <span className="text-accent font-bold">{ads.length}</span>
            &nbsp;Items
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setGridView(true)}
            className={`p-2 border border-gray-200 rounded-full hover:border-gray-500 ${
              gridView ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <Grid2x2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setGridView(false)}
            className={`p-2 border border-gray-200 rounded-full hover:border-gray-500 ${
              !gridView ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        className={`${
          gridView ? "grid grid-cols-4 place-items-center" : " flex flex-col "
        } gap-4 p-4`}
      >
        {loading ? (
          <>
            <div className="w-full flex justify-center items-center">
              <Loader className="animate-spin w-6 h-6" /> <h1>Loading...</h1>
            </div>
          </>
        ) : (
          ads.map((ad) => (
            <div
              key={ad.id}
              className={`${
                gridView
                  ? "w-[240px] h-full flex-col"
                  : "w-full h-auto flex-row"
              } flex items-center justify-start gap-3 border border-gray-200 rounded-2xl overflow-hidden hover:border-accent group`}
            >
              <div
                className={`${
                  gridView ? "w-full" : "w-[200px]"
                } h-[150px] overflow-hidden`}
              >
                <img
                  src={ad.image}
                  alt="test"
                  className="w-full h-full object-cover group-hover:scale-140 group-hover:rotate-10 transition-all duration-300 ease-in-out"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400";
                  }}
                />
              </div>
              <div className="flex gap-2 w-full p-4">
                <div className="grow">
                  <h1 className="text-lg">{ad.title}</h1>
                  <p className="text-xl font-bold text-accent">₹{ad.price}</p>
                </div>
                <div>
                  <button
                    className="border rounded-full p-2 border-gray-300 cursor-pointer group-hover:border-accent"
                    onClick={() => {
                      navigate(`/ads/${ad.id}`);
                    }}
                  >
                    <Eye className="w-4 h-4 group-hover:text-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PublicAds;
