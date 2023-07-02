export const SearchItem = () => {
  return (
    <>
      <div className="grid grid-cols-3 border border-black px-2 py-3 mt-4 rounded-md w-fit">
        <div className="w-44 h-56">
          <img
            className="h-full rounded-md"
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="hotelRoom"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="ml-[-4rem]">
          <h1 className="font-semibold text-blue-700 text-2xl">
            Tower Street Apartments
          </h1>
          <p className="text-sm my-2">500m from center</p>
          <button className="bg-green-600 mb-2 text-white font-semibold p-1 rounded-lg">
            Free airport taxi
          </button>
          <p className="font-bold my-2">
            Studio Apartment with Air conditioning
          </p>
          <p className="text-sm mb-2">
            Entire studio <span>.</span> 1 bathroom <span>.</span> 21m
            <sup>2</sup> 1 full bed{" "}
          </p>
          <p className="text-sm my-2 text-green-700 font-bold">
            Free cancellation
          </p>
          <p className="text-sm text-green-600">
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div className="ml-[1rem]">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Excellent</h1>
            <button className="bg-blue-950 text-white font-bold p-1">
              8.9
            </button>
          </div>
          <div className="mt-20">
            <h1 className="text-3xl text-end">$112</h1>
            <p className="text-end my-2 text-sm text-gray-400">
              includes taxes and fees
            </p>
            <button className="bg-blue-500 py-2 text-sm text-white font-bold w-52 ml-9">
              See availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
