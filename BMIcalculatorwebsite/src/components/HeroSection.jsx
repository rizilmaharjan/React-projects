import { useEffect, useState } from "react";

const HeroSection = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  const handleChange = ()=>{
    let yourWeight = Number(weight)
    let yourHeight = Number(height)
    
    let BMI = ((yourWeight / yourHeight / yourHeight) * 10000).toFixed(1)
    BMI = parseFloat(BMI)
    setBmi(BMI)

  }
  useEffect(()=>{
    handleChange()
  },[height,weight])
 
  return (
    <>
      <div className="lg:flex lg:justify-between lg:items-center lg:relative lg:h-[42rem]">
        <div className="bg-gradient-to-br px-10 from-white to-blue-200 h-[35rem] rounded-br-3xl rounded-bl-3xl mr-4 py-14 lg:w-8/12 lg:h-full">
          <div className="lg:w-8/12 lg:mt-24 lg:px-24">
            <h1 className="font-bold text-5xl text-center lg:text-left lg:text-6xl">
              Body Mass <span className="block lg:inline-block">Index</span>
              Calculator
            </h1>
            <p className="py-8 text-justify text-gray-500 text-lg lg:text-justify">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:absolute lg:left-[40rem]">
          <div className="z-10 mt-[-4rem] bg-white drop-shadow-xl w-3/4 mx-14 rounded-lg px-8 py-6 md:mt-[-13rem] md:rounded-3xl lg:mt-14">
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
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-10 ">
              <div className="w-full sm:w-1/3">
                <label>Height</label>
                <br />
                <input
                  type="number"
                  onChange={(e)=>setHeight(e.target.value)}
                  value={height}
                  placeholder="cm"
                  className="py-4 px-5 rounded-lg border border-gray-400 w-full mt-2 font-semibold text-2xl sm:w-full "
                />
              </div>
              <div className="mt-3 sm:w-1/3 sm:mt-0 ">
                <label>Weight</label>
                <br />
                <input
                  type="number"
                  onChange={(e)=>setWeight(e.target.value)}
                  value={weight}
                  placeholder="kg"
                  className="py-4 px-5 rounded-lg border border-gray-400 w-full mt-2 font-semibold text-2xl sm:w-full "
                />
              </div>
            </div>
            <div className="py-7 pl-8 pr-10 mt-8 h-48 text-white rounded-xl bg-blue-600 md:flex md:justify-between md:items-center md:h-48 md:rounded-r-full lg:h-40 lg:pl-10 lg:rounded-tl-3xl">
              <div className="text-center my-16">
                <div className="lg:hidden mt-[-4rem]">
                  <p className="font-semibold text-sm pt-8 md:text-3xl pb-3">Your BMI is...</p>
                  {
                    Number.isNaN(bmi) ? (
                      <h1 className="text-bold text-5xl">0</h1>
                    ):(
                      <h1 className="py-3 font-bold text-5xl">{bmi}</h1>
                    )
                  }
                  
                </div>
              </div>
              <div className="w-full lg:hidden">
                <p className="hidden text-center sm:block">
                  Your BMI suggests you're a healthy weight. Your ideal weight
                  is between 63.3kgs - 85.2kgs.
                </p>
              </div>
              {/* only for large devices */}
              <div className="hidden lg:w-full lg:block">
                {
                  Number.isNaN(bmi) ? (
                    <div>

                    <h1 className="text-4xl font-bold">Welcome!</h1>
                    <p className="py-4">Enter you height and weight and you will see your BMI result over here</p>
                    </div>
                    
                   
                  ): (
                    <div className="flex justify-center gap-x-2">
                      <span className="text-4xl font-bold">BMI:</span>
                      <span className="text-4xl font-bold">{bmi}</span>

                    </div>
                   

                    
                  )
                }

               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
