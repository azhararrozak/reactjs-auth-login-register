import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-gray-200">
      <div className="flex items-center space-x-5">
        <Link to="/">
          <img
            className="w-15 object-contain cursor-pointer"
            src="/SatuDev.svg"
            alt=""
          />
        </Link>
        
      </div>

      <div className="hidden sm:flex items-center space-x-5 font-bold cursor-pointer">
        <h3 className="active:scale-90 transition duration-100">Sign In</h3>
        <h3 className="px-4 py-1 rounded-full border border-blue-300 border-2 active:scale-90 transition duration-100">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
