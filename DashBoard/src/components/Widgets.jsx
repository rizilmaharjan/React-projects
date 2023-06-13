import {
  KeyboardArrowUpOutlinedIcon,
  PersonOutlineOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
  ShoppingCartOutlinedIcon,
  MonetizationOnOutlinedIcon,
} from "../utils/Icons";
import classNames from "classnames";
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: <PersonOutlineOutlinedIcon className="text-[crimson] " />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="text-[green]" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Users",
        icon: <ShoppingCartOutlinedIcon className="text-yellow-600 " />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: <AccountBalanceWalletOutlinedIcon className="text-[purple]" />,
      };
      break;
    default:
      break;
  }
  return (
    <>
      <div className="flex justify-between px-4 gap-4 drop-shadow-lg bg-white w-2/6 py-3 rounded-md h-28 ">
        <div className="flex flex-col justify-between">
          <span className="font-bold text-[14px] text-gray-400">{data&&data.title}</span>
          <span className="text-[28px] font-semibold">{data&&data.isMoney && "$"}1000</span>
          <span className="text-[12px] border-b-2 border-gray-400 w-fit">
           {data&&data.link}
          </span>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex items-center text-[14px]">
            <KeyboardArrowUpOutlinedIcon />
            20 %
          </div>
          <div className={classNames("rounded-md w-fit p-[2px] bg-[#ff000033]",{
            "bg-[#ff000033]" : data.title === "USERS",
            "bg-yellow-200" : data.title === "ORDERS",
            "bg-green-300" : data.title === "EARNINGS",
            "bg-purple-300" : data.title === "BALANCE",
          })}>
            {data&&data.icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default Widgets;
// 