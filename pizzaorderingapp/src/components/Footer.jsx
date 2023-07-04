export const Footer = () => {
  return (
    <>
      <div className="flex mt-10">
        <div className="w-1/2 h-[20rem] hidden md:block">
          <img className="h-full w-full object-cover" src="/images/bg.png" alt="background" />
        </div>
        <div className="bg-black w-full gap-12 grid grid-cols-3 md:w-2/3 py-10 px-4">
          <div className="text-sm md:text-3xl capitalize text-white">
            oh yes, we did. the kirtipur pizza, well baked slice of pizza.
          </div>
          <div className="text-white uppercase ">
            <h1 className="text-yellow-600 text-sm md:text-md">Find our resturant</h1>
            <p className="text-sm md:text-md">Kirtipur, NayaBazar</p>
          </div>
          <div className="text-white uppercase">
            <h1 className="text-yellow-600 text-sm md:text-md">working hours</h1>
            <p className="text-sm md:text-md">monday until firday</p>
            <p className="text-sm md:text-md">9:00 - 22:00</p>
            <p className="text-sm md:text-md">saturday-sunday</p>
            <p className="text-sm md:text-md">12:00-24:00</p>
          </div>
        </div>
      </div>

    </>
  )
}
