import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DataTable from "../../components/DataTable";
const List = () => {
  return (
    <>
      <div className="flex">
          <Sidebar />
        <div className="w-full">
          <Navbar />
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default List;
