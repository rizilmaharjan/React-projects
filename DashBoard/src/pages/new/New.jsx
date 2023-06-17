import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Form } from "../../components/Form";
import Buttonn from "../../components/Button";
import { useState } from "react";

const New = ({inputs,title}) => {
  const [file, setFile] = useState("")
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="px-4">
            <div className="bg-white drop-shadow-xl py-4 px-3 text-2xl font-semibold mt-4 ">
              <h1 className="text-[#908E9B] opacity-40">{title}</h1>
            </div>
            <div className="flex mt-10 bg-white drop-shadow-xl py-4">
              <div className="flex-[1]">
                <img
                  className="rounded-full mx-auto"
                  src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                  alt="upload"
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex-[2]">
                <form className="grid grid-cols-2 gap-y-8 place-items-center">
                  <div>

                  <label className="ml-[-6.5rem]" htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon />
                  </label>
                  <input className="hidden cursor-pointer" id="file" type="file" onChange={e=>setFile(e.target.files[0])} />
                  </div>
                  {inputs.map((val) => {
                    return (
                     <Form val={val} key={val.id} />
                    );
                  })}
                </form>
                <div className="flex justify-center">
                 <Buttonn value={"Send"} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
