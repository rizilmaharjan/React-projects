import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";
import Tablee from "../../components/Table";
const Single = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="flex gap-x-6 mt-8">
            <div className=" bg-white drop-shadow-xl px-7 ml-6 w-2/5">
              <button className="absolute right-0 top-0 bg-purple-200 px-2 py-0.5 rounded-md text-purple-600">
                Edit
              </button>
              <h1 className="text-[#908E9B] font-semibold mb-6">Information</h1>
              <div className="flex gap-x-6">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="img"
                />
                <div>
                  <h2 className="font-semibold text-4xl">Jane Doe</h2>
                  <div className="mt-2">
                    <p className="mt-3">
                      <span className="font-semibold text-[#908E9B]">
                        Email
                      </span>
                      : janedoe@gmail.com
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-[#908E9B]">
                        Phone
                      </span>
                      : +1 2345 67 89
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-[#908E9B]">
                        Address
                      </span>
                      : Kathmandu, Nepal
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-[#908E9B]">
                        Country
                      </span>
                      : Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Chart
                title={"User Spending (Last 6 Months Revenue)"}
                aspect={3 / 1}
              />
            </div>
          </div>
          <div className="px-4 bg-white drop-shadow-xl rounded-lg mt-10 mx-auto w-11/12 ">
            <h1 className="text-xl py-2 font-semibold text-[#908E9B] opacity-45">Last Transactions</h1>
            <Tablee />
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
