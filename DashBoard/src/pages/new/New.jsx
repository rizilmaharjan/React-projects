import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { productInputs } from "../../data/FormSource";

const New = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="px-4">
            <div className="bg-white drop-shadow-xl py-4 px-3 text-2xl font-semibold mt-4 ">
              <h1 className="text-[#908E9B] opacity-40">Add New User</h1>
            </div>
            <div className="flex">
              <div className="flex-[1]">
                <img
                  className="rounded-full"
                  src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  alt="upload"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex-[2]">
                <form className="flex">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon />
                  </label>
                  {productInputs.map((val) => {
                    return (
                      <div className="flex flex-col my-2 gap-y-2">
                        <input className="border border-t-0 border-r-0 border-l-0 outline-none " type={val.type} placeholder={val.placeholder} />
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
