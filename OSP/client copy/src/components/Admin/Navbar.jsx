import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../index.css";
import logo from "../assets/logo.png";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const handleLogout = () => {
    const confirmSave = window.confirm("Are you sure you want to log out ?");
    if (!confirmSave) {
      return; // Exit the function if user does not confirm
    }
    localStorage.removeItem("userInfo");
    localStorage.removeItem("roleChecked");
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-around bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl px-4 py-4 lg:px-6">
      {/* Left Section */}
      <div
        as={Link}
        to="/"
        className="flex flex-col lg:flex-row items-center text-white font-bold"
      >
        {location.pathname !== "/admin" && (
          <button
            onClick={handleBack}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full shadow-lg p-2.5 text-white font-medium m-3 transition-all duration-300 hover:-translate-y-px hover:shadow-xl border border-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        )}
        <img
          src={logo}
          alt="Scholarship Logo"
          className="w-20 h-auto lg:w-24 lg:h-30 animate-pulse-grow pl-0 lg:pl-10"
        />
        <span className="text-center lg:text-left">OSP- Admin Side</span>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 mt-4 lg:mt-0">
        <Link
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg px-5 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-px hover:shadow-xl border border-white/20"
          to="/admin/add-scholarship"
        >
          Add Scholarship
        </Link>
        <Link
          to="/admin/list-scholarships"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg px-5 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-px hover:shadow-xl border border-white/20"
        >
          View Applicants
        </Link>
      </div>

      {/* Right Section */}
      <div className="mt-4 lg:mt-0">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-px hover:shadow-xl border border-red-400/20"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
