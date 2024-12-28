import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Global CSS Reset */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>

      {/* Header */}
      <div className="bg-slate-200 shadow-md w-full">
        <div className="flex justify-between items-center w-full px-4 py-3">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-bold text-sm sm:text-xl text-slate-500">
                Manjeet
              </span>
              <span className="font-bold text-sm sm:text-xl text-slate-700 ml-1">
                Estate
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="bg-slate-100 px-3 py-2 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search.."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-4">
            <div>
              <Link
                to="/"
                className="hidden sm:inline text-slate-700 hover:underline"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="hidden sm:inline text-slate-700 hover:underline"
              >
                About
              </Link>
            </div>
            <div>
              <Link to="/sign-in" className="text-slate-700 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
