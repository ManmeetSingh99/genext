import React from "react";
import logoImage from "../assets/genext_logo_2.png";

export default function Navbar() {
  const menuItems = [
    "Home",
    "Products",
    "About GenNext",
    "Orders",
    "Contact Us",
  ];

  return (
    <div className="navbar shadow-sm bg-transparent px-4 py-2 font-[Inter]">
      {/* Logo */}
      <div className="navbar-start">
        <img src={logoImage} alt="Logo" className="h-15 w-auto lg:ml-4" />
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex mr-8">
        <ul className="flex items-center space-x-6 text-md font-semibold mr-2 lg:mr-4 uppercase text-[#8847E6] cursor-pointer">
          {menuItems.map((item, index) => (
            <li key={item} className="flex items-center gap-6 ">
              <a>{item}</a>
              {index !== menuItems.length - 1 && (
                <span className="text-[#8847E6]">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end  lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-[#8847E6] font-semibold"
          >
            {menuItems.map((item) => (
              <li key={item}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
