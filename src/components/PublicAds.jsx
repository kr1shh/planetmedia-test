import { useEffect, useState } from "react";
import publicRequest from "../services/publicRequest";

const PublicAds = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ gridView, setGridView ] = useState(true)

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await publicRequest.get("/api/advertisements");
        setAds(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  return (
    <>
    <button onClick={()=>setGridView(!gridView)} className="border border-blue-500 p-2 text-blue-500">Grid View</button>
      <div className={`${gridView ? "grid grid-cols-4" : " flex flex-col " } gap-4`}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          ads.map((ad) => (
            <div
              key={ad.id}
              className={`${ gridView ? "w-[300px] h-[300px] flex-col" : "w-full h-auto flex-row" } flex items-center justify-center gap-3 bg-gray-100 p-4`}
            >
              <div className="w-[150px] h-[150px] overflow-hidden rounded-md">
                <img
                  src={ad.image}
                  alt="test"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400";
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="grow">
                    <h1>{ad.title}</h1>
                    <p>₹{ad.price}</p>
                </div>
                <div>
                    <button className="border border-blue-500 p-2 text-blue-500">
                    View
                    </button>
                    <button className="border border-blue-500 p-2 text-blue-500">
                    Edit
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
