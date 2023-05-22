import man from "../images/man.png";
import BMIResult from "./BMIResult";
const Result = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:gap-x-14">

      <div className="md:flex md:pr-8 md:gap-x-10 md:mt-14 lg:justify-center   lg:w-9/12 lg:flex lg:items-start">
        <div className="mt-52 border rounded-3xl mb-14 bg-blue-50 lg:mt-[8rem]">
          <div className="z-10 mt-[-10rem] sm:flex sm:justify-center ">
            <img src={man} alt="man" />
          </div>
        </div>
        <BMIResult />
      </div>
      </div>
    </>
  );
};

export default Result;
