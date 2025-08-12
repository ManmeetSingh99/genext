import React from "react";
import logoImage from "../assets/genext_logo_2.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const menuItems = [
    { id: 1, label: "Home", href: "#hero" },
    { id: 2, label: "Products", href: "#products" },
    { id: 3, label: "About", href: "#about" },
    { id: 4, label: "Testimonials", href: "#testimonials" },
    { id: 4, label: "Orders", href: "#contact" },
    { id: 5, label: "Contact Us", href: "#contact" },
  ];
  const handleNavigation = (href) => {
    const sectionId = href.replace("#", "");

    if (window.location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Pass target section ID in navigation state
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-500000 shadow-sm px-4 py-2 font-[Inter] bg-white/70 backdrop-blur-xs transition-all duration-300">
      {/* Logo */}
      <div className="navbar-start">
        <img src={logoImage} alt="Logo" className="h-15 w-auto lg:ml-4" />
      </div>
      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex mr-8">
        <ul className="flex items-center space-x-6 md:text-sm lg:text-sm font-semibold mr-2 lg:mr-4 uppercase text-[#8847E6] cursor-pointer">
          {menuItems.map((item, index) => (
            <li key={item.id} className="flex items-center md:gap-0 lg:gap-6">
              <a
                className="whitespace-nowrap"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </a>
              {index !== menuItems.length - 1 && (
                <span className="text-[#8847E6]">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Dropdown */}
      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="relative">
          {/* Toggle checkbox */}
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="hidden peer"
          />

          {/* Hamburger icon aligned right */}
          <label
            htmlFor="mobile-menu-toggle"
            className="btn btn-ghost p-2 z-50"
          >
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

          {/* Dropdown Menu - Full width from top */}
          <div className="fixed top-19 left-0 w-full transition-all duration-300 ease-in-out scale-y-0 origin-top peer-checked:scale-y-100 bg-[white]/80 shadow-md z-40">
            <ul className="flex flex-col items-center px-6 py-4 gap-4 uppercase text-[#211f1f] font-bold">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => {
                      document.getElementById(
                        "mobile-menu-toggle"
                      ).checked = false;
                      handleNavigation(item.href);
                    }}
                    className="block py-2 text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
