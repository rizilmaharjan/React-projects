import { AiOutlineArrowRight } from "react-icons/ai";
const HeroSection = () => {
  return (
    <>
      <div className="h-96 herosection flex justify-center items-center gap-y-10 flex-col">
        <div>
          <h1 className="text-4xl font-semibold capitalize sm:text-6xl md:text-7xl">
            how can we help?
          </h1>
        </div>
        <div className="w-4/5 relative lg:w-3/5 ">
          <input
            className="w-full px-3 py-4 text-xl border border-black rounded-lg font-semibold hover:border-blue-800"
            type="text"
            placeholder="Search"
          />

          <AiOutlineArrowRight className="absolute right-5 bottom-5 text-xl" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
