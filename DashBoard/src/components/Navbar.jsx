import { LanguageOutlinedIcon, DarkModeOutlinedIcon, UnfoldMoreDoubleOutlinedIcon, NotificationsNoneOutlinedIcon, ModeCommentOutlinedIcon, MenuOutlinedIcon, SearchOutlinedIcon } from "../utils/Icons";
import { myCustomContext } from "../context/ColorContext";
import classNames from "classnames";
const Navbar = () => {
  const {darkMode} = myCustomContext();
  return (
    <>
      <div className={classNames("border-b-2 px-4 py-1.5 flex items-center justify-between",{
        "text-white" : darkMode === true
      })}>
        <div>
          <div className="relative my-2 ml-3">
            <input className={classNames("border-2 outline-none py-1 px-2",{
              "bg-black" : darkMode === true
            })} type="text" placeholder="Search..." />
            <SearchOutlinedIcon className="absolute right-2 top-2" />

          </div>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <div className="flex">

          <LanguageOutlinedIcon />
          <p>English</p>
          </div>
          <div>
            <DarkModeOutlinedIcon/>


         
          </div>
          <div>
            <UnfoldMoreDoubleOutlinedIcon />
          </div>
          <div>
            <NotificationsNoneOutlinedIcon/>

          </div>
          <div>
            <ModeCommentOutlinedIcon/>
          </div>
          <div>
          <MenuOutlinedIcon />
          </div>
        </div>

      </div>
        
      
    </>
  )
}

export default Navbar
