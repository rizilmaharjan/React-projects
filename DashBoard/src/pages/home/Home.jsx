import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widgets from "../../components/Widgets";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import Tablee from "../../components/Table";

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
            <Chart title={"Last 6 Months (Revenue)"} aspect={2 / 1} />
          </div>
          <div>
            <Tablee />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
