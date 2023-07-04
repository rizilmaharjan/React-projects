import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [open, setIsOpen] = useState(false)
  const handleClick = ()=>{
    setIsOpen(!open)
  }
  return (
    <>
      <div className="bg-orange-700 py-5 flex items-center justify-between px-10 sticky top-0 right-0 z-[999]">
        <div className="flex items-center">
          <div className="w-12 py-2 px-2 grid place-items-center rounded-full bg-white">
            <img src="/images/telephone.png" alt="" />
          </div>
          <div className="pl-6">
            <h1 className="uppercase text-white text-lg font-semibold">
              Order Now
            </h1>
            <p className="text-white font-bold text-xl">098 765 432</p>
          </div>
        </div>
        <div className={`flex items-center md:w-auto md:bg-inherit  md:static fixed bottom-0 top-0
         ${open ? "right-0" : "right-[-100%]" }  py-2 px-4 bg-orange-600 md:h-auto h-screen transition-all ease-in-out duration-300`}>
          <ul className="flex h-2/3 text-white flex-col md:flex-row font-semibold text-lg gap-6">
            <NavLink to="/" onClick={handleClick} >
              <li className="px-4">Homepage</li>
            </NavLink>
            <NavLink onClick={handleClick}>
              <li className="px-4">Products</li>
            </NavLink>
            <NavLink to={"/menu"} onClick={handleClick}>
              <li className="px-4">Menu</li>
            </NavLink>
          <span className="px-4 myFont text-4xl hidden md:block text-white font-semibold">
            Kirtipur
          </span>
          <NavLink to={"/events"} onClick={handleClick}>
              <li className="px-4">Events</li>
            </NavLink>
            <NavLink to={"/blog"} onClick={handleClick}>
              <li className="px-4">Blog</li>
            </NavLink>
            <NavLink to={"/contact"} onClick={handleClick}>
              <li className="px-4">Contact</li>
            </NavLink>
          </ul>
        
        </div>
        <div className="relative px-2 hidden md:block">
          <NavLink to="/cart">
          <AiOutlineShoppingCart color="white" size={35} />

          </NavLink>
          <span className=" absolute top-5 left-8 py-0.5 px-2.5 rounded-full text-orange-600 bg-white">
            4
          </span>
        </div>
        <div className="md:hidden relative">
          {
            open ? <AiOutlineClose size={40} color="white" onClick={handleClick} /> :  <AiOutlineMenu size={40} color="white" onClick={handleClick} />
          }
         

          
        </div>
      </div>
    </>
  );
};
