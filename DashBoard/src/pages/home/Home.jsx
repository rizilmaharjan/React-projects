import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widgets from "../../components/Widgets";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className=" w-full">
          <Navbar />
          <div className="flex justify-between gap-10 px-8 mt-6">

          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
          </div>
          
          </div>
      </div>
    </>
  );
};

export default Home;
