import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import publicRequest from "../../services/publicRequest";
import toast from "react-hot-toast";

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
        <h1>Loading...</h1>
      ) : (
        <main className="container flex gap-3 mx-auto">
          <div className="w-full">
            <div>
              <div className="w-full flex justify-between">
                <h3>{adDetails.title}</h3>
                <div>
                  <p>Price :</p>
                  <h2>₹{adDetails.price}</h2>
                </div>
              </div>
              <div className="w-full h-[300px]">
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
              <h3>Overview</h3>
              <p>{adDetails.description}</p>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default AdsDetails;
