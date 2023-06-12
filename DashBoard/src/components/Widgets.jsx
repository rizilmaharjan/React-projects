import {
  KeyboardArrowUpOutlinedIcon,
  PersonOutlineOutlinedIcon,
} from "../utils/Icons";
const Widgets = () => {
  return (
    <>
      <div className="flex justify-between px-4 gap-4 drop-shadow-lg bg-white w-2/6 py-3 rounded-md h-28 ">
        <div className="flex flex-col justify-between">
          <span className="font-bold text-[14px] text-gray-400">USERS</span>
          <span className="text-[28px] font-semibold">21312</span>
          <span className="text-[12px] border-b-2 border-gray-400 w-fit">See all user</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center text-[14px]" >
            <KeyboardArrowUpOutlinedIcon />
            20 %
          </div>
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Widgets;
