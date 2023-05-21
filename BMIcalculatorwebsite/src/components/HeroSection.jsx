const HeroSection = () => {
  return (
    <>
      <div>
        <div className="bg-blue-500 h-[35rem] rounded-br-3xl rounded-bl-3xl mr-4">
          <h1 className="font-bold text-5xl text-center">
            Body Mass <span className="block">Index</span> Calculator
          </h1>
          <p className="py-8 px-6 text-center text-gray-600 text-lg">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <div className="z-10 mt-[-10rem] bg-white drop-shadow-xl w-3/4 mx-14 rounded-lg px-8 py-6">
          <div>
            <h1 className="font-bold text-2xl">Enter your details below</h1>
          </div>
          <div className="flex py-4 w-full justify-around">
            <div className="flex">
              <input type="radio" name="unit" />
              <p className="mx-4 font-bold text-lg">Metric</p>
            </div>
            <div className="flex">
              <input type="radio" name="unit" />
              <p className="mx-4 font-bold text-lg">Imperial</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <label>Height</label><br />
              <input type="number" defaultValue={185} className="py-4 px-5 rounded-lg border border-gray-400 w-72 mt-2 font-semibold text-2xl" />
            </div>
            <div className="mt-3">
              <label>Weight</label><br />
              <input type="number" defaultValue={80} className="py-4 px-5 rounded-lg border border-gray-400 w-72 mt-2 font-semibold text-2xl"  />
            </div>
          </div>
          <div className=" py-7 pl-8 pr-10 mt-8 h-72 text-white rounded-xl bg-blue-600">
            <p className="font-semibold textlg">Your BMI is...</p>
            <h1 className="py-3 font-bold text-5xl">23.4</h1>
            <p className="mt-3">
              Your BMI suggests you're a healthy weight. Your ideal weight is
              between 63.3kgs - 85.2kgs.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default HeroSection;
