import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Header = () => {
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
    // reload to ensure stateful UI updates where needed
    window.location.reload();
  };

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
        {!user ? (
          <Link to="/auth/login" className="active:scale-90 transition duration-100">Sign In</Link>
        ) : (
          <>
            <Link to="/dashboard" className="active:scale-90 transition duration-100">Dashboard</Link>
            <button onClick={handleLogout} className="ml-4 text-red-600">Sign Out</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
