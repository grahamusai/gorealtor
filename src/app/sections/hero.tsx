import Search from "../components/search";

const HeroSection = () => {
  return (
    <div className="mt-5 h-[80vh] bg-[url('/images/bg-image.jpg')] bg-cover bg-center rounded-2xl">
      <div className="flex items-center justify-center bg-[rgba(0,0,0,0.49)] w-full h-full rounded-2xl">
        <div className=" text-white text-center p-5 space-y-5">
          <h1 className="text-3xl text-center md:text-5xl lg:text-6xl font-semibold ">
            Journey To Your Perfect Home
          </h1>
          <p className=" hidden md:block">
            We are here to help you make your dream home a reality
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
