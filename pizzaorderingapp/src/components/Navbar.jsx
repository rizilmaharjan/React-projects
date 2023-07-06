import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setIsOpen(!open);
  };
  return (
    <>
      <div className="bg-orange-700 flex items-center justify-between md:justify-evenly px-4 sticky top-0 right-0 z-[999]">
        <div className="w-40 grid place-items-center rounded-full" onClick={()=>navigate("/")}>
          <img className="w-full" src="/images/pizzalogo.png" alt="logo" />
        </div>

        <div
          className={`flex items-center md:w-auto md:bg-inherit  md:static fixed bottom-0 top-0
         ${
           open ? "right-0" : "right-[-100%]"
         }  py-2 px-4 bg-orange-600 md:h-auto h-screen transition-all ease-in-out duration-300`}
        >
          <ul className="flex h-2/3 text-white flex-col md:flex-row font-semibold text-lg gap-6">
            <NavLink to="/" onClick={handleClick}>
              <li className="px-4">Homepage</li>
            </NavLink>
           
            <NavLink to={"/events"} onClick={handleClick}>
              <li className="px-4">Events</li>
            </NavLink>
            <NavLink to={"/blog"} onClick={handleClick}>
              <li className="px-4">Blog</li>
            </NavLink>
            <NavLink to={"/contact"} onClick={handleClick}>
              <li className="px-4">Contact</li>
            </NavLink>
            <NavLink className={"md:hidden"} to={"/cart"} onClick={handleClick}>
              <li className="px-4">Cart</li>
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
          {open ? (
            <AiOutlineClose size={40} color="white" onClick={handleClick} />
          ) : (
            <AiOutlineMenu size={40} color="white" onClick={handleClick} />
          )}
        </div>
      </div>
    </>
  );
};
