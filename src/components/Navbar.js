import React from "react";
import {
  BiCartAlt,
  BiHome,
  BiLogIn,
  BiLogOut,
  BiPackage,
  BiUser,
  BiUserPlus,
  BiInfoCircle,
  BiStar,
  BiShoppingBag,
  BiQuestionMark,
} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  const data = useCart();
  const totalItemCount = data.reduce((total, item) => total + item.qty, 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[3.8rem] bg-[#8c0145] z-50">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-xl font-bold text-white font-roboto no-underline"
          >
            Jogan Meera
          </Link>

          <div className="flex items-center space-x-2">
            <Link to="/" className="no-underline">
              <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                <BiHome className="text-2xl text-white group-hover:scale-110 transition-transform duration-200" />
              </button>
            </Link>
            <a href="#products" className="no-underline">
              <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                <BiShoppingBag className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              </button>
            </a>
            <a href="#about" className="no-underline">
              <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                <BiInfoCircle className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              </button>
            </a>
            <a href="#reviews" className="no-underline">
              <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                <BiStar className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              </button>
            </a>
            <a href="#faq" className="no-underline">
              <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                <BiQuestionMark className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              </button>
            </a>

            <button
              onClick={() => navigate("/cart")}
              className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group"
            >
              <BiCartAlt className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              {totalItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>

            {localStorage.getItem("authToken") ? (
              <>
                <Link to="/myOrders" className="no-underline">
                  <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                    <BiPackage className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </Link>
                <Link to="/profile" className="no-underline">
                  <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                    <BiUser className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group"
                >
                  <BiLogOut className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                </button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="no-underline">
                  <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                    <BiLogIn className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </Link>
                <Link to="/register" className="no-underline">
                  <button className="flex items-center px-2 h-10 text-white rounded-lg cursor-pointer group">
                    <BiUserPlus className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
