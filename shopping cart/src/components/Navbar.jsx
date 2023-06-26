import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-end items-center px-24 text-white bg-black font-semibold py-6 gap-x-4">
        <Link to="/">
        <div className="text-3xl">Shop</div>
        </Link>
        <Link to="/cart">
        <div>
          <AiOutlineShoppingCart className="text-3xl" />
        </div>
        </Link>
      </nav>
    </>
  );
}
