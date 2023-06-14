import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <>
      <div className="bg-white drop-shadow-lg h-fit py-10 px-8 flex-[1]">
        <div className="flex justify-between pb-2">
          <p className="text-[#908E9B] text-lg">Total Revenue</p>
          <MoreVertIcon />
        </div>
        <div>
          <div className="flex flex-col items-center gap-y-4 ">
            <CircularProgressbar
              className="w-1/3"
              value={70}
              text="70%"
              strokeWidth={5}
            />
            <p className="text-lg font-semibold text-[#908E9B]">Total Sales made today</p>
            <h1 className="text-3xl font-semibold">$420</h1>
            <p className="text-center text-[#908E9B]">
              Previous transactions processing. Last payments may not be
              included.
            </p>
          </div>
          <div className="flex justify-around items-center mt-4">
            <div>
              <h1 className="mb-2 text-[#908E9B]">Target</h1>
              <span className="ml-[-14px] text-red-600"><KeyboardArrowDownIcon /> $12.4k</span>

            </div>
            <div>
            <h1 className="mb-2 text-[#908E9B]">Last Week</h1>
              <span className="ml-[-14px] text-green-600"><KeyboardArrowUpIcon /> $12.4k</span>

            </div>
            <div>
            <h1 className="mb-2 text-[#908E9B]">Last Month</h1>
              <span className="ml-[-14px] text-green-600"><KeyboardArrowUpIcon /> $12.4k</span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
