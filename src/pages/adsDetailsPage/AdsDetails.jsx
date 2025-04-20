import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import publicRequest from "../../services/publicRequest";
import toast from "react-hot-toast";
import LoaderState from "../../components/LoaderState";

const AdsDetails = () => {
  const { id } = useParams();
  const [adDetails, setAdDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAd = async () => {
      try {
        setLoading(true);
        const response = await publicRequest.get(`/api/advertisements/${id}`);
        setAdDetails(response.data);
      } catch (err) {
        toast.error(err.response.data.error.message);
        setTimeout(() => {
          navigate("/");
        }, 600);
      } finally {
        setLoading(false);
      }
    };
    fetchAd();
  }, [id,navigate]);

  return (
    <>
      {loading ? (
        <LoaderState/>
      ) : (
        <main className="container flex gap-3 mx-auto">
          <div className="w-full bg-white rounded-2xl border border-gray-300 my-20 p-6">
            <div className="flex flex-col gap-4 mb-6">
              <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">{adDetails.title}</h3>
                <div>
                  <p className="text-base text-gray-600">Price :</p>
                  <h2 className="text-2xl font-bold text-accent">₹{adDetails.price}</h2>
                </div>
              </div>
              <div className="w-full h-[300px] overflow-hidden rounded-2xl">
                <img
                  src={adDetails.image}
                  alt="test"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400";
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Overview</h3>
              <p className="text-sm text-gray-600">{adDetails.description}</p>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default AdsDetails;
