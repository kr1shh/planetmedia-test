import PublicAds from "../../components/PublicAds";
import hero01 from "../../assets/hero-01.jpeg";
import hero02 from "../../assets/hero-02.jpeg";
import hero03 from "../../assets/hero-03.jpeg";
import badgeImage from "../../assets/badgeimg.png";

const Home = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="w-full flex justify-center items-center my-20">
          <div className="w-[50%] h-[400px] overflow-hidden flex items-center justify-center relative">
            <h1 className="text-5xl font-medium text-primary relative z-10">
              Get daily thing <br /> in same{" "}
              <span className="text-primary/20">platform</span>
            </h1>
            <h1 className="absolute text-[150px] font-black tracking-widest z-[1] bottom-[-60px] border text-stroke">
              listbnb
            </h1>
          </div>
          <div className="flex w-[50%] h-[400px] gap-2">
            <div className="w-[50%] h-full relative">
              <img
                src={badgeImage}
                alt="baedge"
                className="absolute top-[90px] right-[-7px] w-[100px] h-[100px]"
              />
              <img
                src={hero01}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[50%] flex flex-col gap-2">
              <div className="w-full h-[40%] relative">
                <div className="text-white absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[11]">
                  <h1 className="text-3xl">5000+</h1>
                  <p className="uppercase text-xs tracking-widest mt-1">
                    Daily ads listing
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-accent/80 z-[10]"></div>
                <img
                  src={hero02}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[60%]">
                <img
                  src={hero03}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <p className="uppercase tracking-widest text-accent text-sm">
            What's new
          </p>
          <h2 className="text-4xl font-medium capitalize">
            Fresh recommendations
          </h2>
        </div>
        <PublicAds />
      </main>
    </>
  );
};

export default Home;
