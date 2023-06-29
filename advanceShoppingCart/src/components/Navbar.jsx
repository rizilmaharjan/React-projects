import { NavLink } from "react-router-dom";
import { UilShoppingCart } from '@iconscout/react-unicons'

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 px-14 py-4 text-lg bg-white drop-shadow-xl">
        <ul className="flex gap-x-10 ">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "#908E9B",
              };
            }}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "#908E9B",
              };
            }}
            to="/store"
          >
            <li>Store</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "#908E9B",
              };
            }}
            to="/about"
          >
            <li>About</li>
          </NavLink>
        </ul>
        <div className="relative border-2 border-#908E9B p-2 rounded-full">

        <UilShoppingCart size="35" color="blue" />
        <span className="absolute left-7 top-9 bg-red-500 text-white font-semibold w-7 tex-white text-center rounded-full">20</span>
        </div>
            
      </nav>
    </>
  );
};
