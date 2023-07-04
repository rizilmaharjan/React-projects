import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="bg-orange-700 py-5 flex items-center justify-between px-10 sticky top-0 z-[999]">
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
        <div className="flex items-center">
          <ul className="flex text-white font-semibold text-lg">
            <NavLink to="/">
              <li className="px-4">Homepage</li>
            </NavLink>
            <NavLink>
              <li className="px-4">Products</li>
            </NavLink>
            <NavLink to={"/menu"}>
              <li className="px-4">Menu</li>
            </NavLink>
          </ul>
          <span className="px-4 myFont text-4xl text-white font-semibold">
            Kirtipur
          </span>
          <ul className="flex text-white font-semibold text-lg">
            <NavLink to={"/events"}>
              <li className="px-4">Events</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li className="px-4">Blog</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="px-4">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="relative px-2">
          <NavLink to="/cart">
          <AiOutlineShoppingCart color="white" size={35} />

          </NavLink>
          <span className=" absolute top-5 left-8 py-0.5 px-2.5 rounded-full text-orange-600 bg-white">
            4
          </span>
        </div>
      </div>
    </>
  );
};
