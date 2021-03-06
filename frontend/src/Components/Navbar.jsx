import React from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="shadow-md">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
            <span className="ml-3 text-xl">Mern Tutorial</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/login" className="mr-5 hover:text-gray-900">
              Login
            </Link>
            <Link to="/registration" className="mr-5 hover:text-gray-900">
              Registration
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
