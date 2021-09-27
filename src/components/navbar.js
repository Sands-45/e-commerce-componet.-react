import { Link } from "react-router-dom";
import itemsInCart from "./img/itemsInCart.svg";
import menuIcon from "./img/menu.svg";

function Navbar({ cart }) {
  return (
    <div className="h-16 z-10 w-screen bg-gray-900 fixed top-0 flex items-center px-2 md:px-20">
      <h1 className="text-2xl text-[#ffc300] font-bold font-mono">
        SANDS_45🔆
      </h1>
      <div className="absolute right-4 md:right-20 space-x-2 md:space-x-6 font-mono">
        <Link
          to="/"
          className="text-[#ffd60a] border-b-2 border-[#ffd60a] hover:opacity-50 transition-opacity duration-500 hidden md:inline-block"
        >
          Menu
        </Link>
        <Link
          to="/checkout"
          className="text-[#ffd60a] hover:opacity-50 transition-opacity duration-500  hidden md:inline-block"
        >
          Check-Out
        </Link>
        <Link to="/" className="text-[#ffd60a] space-x-2">
          <img className="inline-block mb-1" src={itemsInCart} alt="cart" />
          <span>{cart.length}</span>
        </Link>
        <img className="inline-block md:hidden" src={menuIcon} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
