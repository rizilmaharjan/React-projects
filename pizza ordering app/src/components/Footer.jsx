export const Footer = () => {
  return (
    <>
      <div className="flex mt-10">
        <div className="w-1/2 h-[20rem]">
          <img className="h-full w-full object-cover" src="/images/bg.png" alt="background" />
        </div>
        <div className="bg-black gap-12 grid grid-cols-3 w-2/3 py-10 px-4">
          <div className="text-3xl capitalize text-white">
            oh yes, we did. the kirtipur pizza, well baked slice of pizza.
          </div>
          <div className="text-white uppercase ">
            <h1 className="text-yellow-600">Find our resturant</h1>
            <p>Kirtipur, NayaBazar</p>
          </div>
          <div className="text-white uppercase">
            <h1 className="text-yellow-600">working hours</h1>
            <p>monday until firday</p>
            <p>9:00 - 22:00</p>
            <p>saturday-sunday</p>
            <p>12:00-24:00</p>
          </div>
        </div>
      </div>

    </>
  )
}
