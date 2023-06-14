import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widgets from "../../components/Widgets";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className=" w-full">
          <Navbar />
          <div className="flex justify-between gap-10 px-8 mt-6">
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earning" />
            <Widgets type="balance" />
          </div>
          <div className="flex mt-8 gap-x-5 px-10">
            <Featured />
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
