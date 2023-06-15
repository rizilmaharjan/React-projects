import {
  DashboardIcon,
  PersonOutlineOutlinedIcon,
  CategoryOutlinedIcon,
  BorderColorOutlinedIcon,
  LocalShippingIcon,
  QueryStatsOutlinedIcon,
  MonitorHeartOutlinedIcon,
  PsychologyOutlinedIcon,
  SettingsOutlinedIcon,
  AccountBoxOutlinedIcon,
  LogoutOutlinedIcon,
  EditNotificationsOutlinedIcon,
} from "../utils/Icons";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center py-4 border-r border-black w-1/5 ">
        <div className="flex justify-center">
          <span className="text-purple-600 font-semibold text-2xl">Admin</span>
        </div>
        <hr className="border-black w-full my-4" />
        <div className="w-full">
          <ul className="pl-5">
            <p className="text-xs font-bold text-[#999] mt-4 mb-1">MAIN</p>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <DashboardIcon className="icon" /> <span className="span">Dashboard</span>
            </li>
            <p className="text-xs font-bold text-[#999] mt-4 mb-1">LISTS</p>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <PersonOutlineOutlinedIcon className="icon" /> <span className="span">Users</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <CategoryOutlinedIcon className="icon" /> <span className="span">Products</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <BorderColorOutlinedIcon className="icon" /> <span className="span">Orders</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <LocalShippingIcon className="icon" /> <span className="span">Delivery</span>
            </li>
            <p className="text-xs font-bold text-[#999] mt-4 mb-1">USEFUL</p>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">

             
              <QueryStatsOutlinedIcon className="icon" /> <span className="span">Stats</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <EditNotificationsOutlinedIcon className="icon" />
              <span className="span">Notifications</span>
            </li>
            <p className="text-xs font-bold text-[#999] mt-4 mb-1">SERVICE</p>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <MonitorHeartOutlinedIcon className="icon" /> <span className="span">System Health</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <PsychologyOutlinedIcon className="icon" /> <span className="span">Logs</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <SettingsOutlinedIcon className="icon" /> <span className="span"> Settings</span>
            </li>
            <p className="text-xs font-bold text-[#999] mt-4 mb-1">USER</p>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <AccountBoxOutlinedIcon className="icon" /> <span className="span"> Profile</span>
            </li>
            <li className="flex items-center p-2 cursor-pointer hover:bg-[#ece7ff]">
             
              <LogoutOutlinedIcon className="icon" /> <span className="span"> LogOut</span>
            </li>
          </ul>
        </div>
        <div className="flex mt-6 gap-4 w-full pl-5">
          <div className="w-10 h-10 bg-white border-2 border-black rounded-lg cursor-pointer"></div>
          <div className="w-10 h-10 bg-black border-2 border-black rounded-lg cursor-pointer"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
