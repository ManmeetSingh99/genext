import React from "react";
import genextLogo from "../assets/Genext_footer.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left - Logo and Desc */}
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src={genextLogo}
            alt="GeNext Logo"
            className="mb-4 object-contain"
          />
          <p className="text-sm font-medium font-[Poppins]">
            GeNext Beverages connects global suppliers with businesses through
            premium alcoholic and non-alcoholic drinks, driven by quality,
            reliability, and innovation.
          </p>
        </div>

        {/* Center - Links + Email Input */}
        <div className="md:w-2/3 flex flex-col gap-6">
          {/* Email Input */}
          <div className="flex gap-2 rounded-2xl">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-sm rounded-2xl ml-[-5px] border-0 w-full max-w-2xl text-white  bg-[#242424] placeholder:text-white"
            />
            <Link to="/contact">
              <button className="btn bg-[#A175FE] rounded-2xl px-10 btn-sm border-0 text-white font-[Poppins] hover:bg-purple-700">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Links */}
          <div className="flex md:flex-row gap-8 md:gap-30 font-medium text-sm">
            <div className="flex flex-col space-y-2 text-xs font-[Poppins]">
              <p>GENEXT DELIVERY</p>
              <p>BECOME A CUSTOMER</p>
              <p>ORDER ONLINE</p>
              <p>HORECA WHOLESALER</p>
            </div>
            <div className="flex flex-col space-y-2 text-xs font-[Poppins]">
              <p>DRINKS SERVICE</p>
              <p>WHOLESALER</p>
              <p>BEER MERCHANT</p>
              <p>BEER BARRELS</p>
            </div>
            <div className="space-y-2 text-xs font-[Poppins]">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>123456789</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>abcd@abcd.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Keilbroeck 4/C18, 2020 Antwerp, Belgium</span>
              </div>

              {/* Social Icons */}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
              <FaTwitter className="hover:text-purple-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-purple-400 cursor-pointer" />
              <FaInstagram className="hover:text-purple-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-xs text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2025 GeNext B.V. – Beverage Delivery Services | <Link to="/privacy-policy">Privacy policy</Link> | <Link to="/terms-of-use">Terms of Use</Link> | <Link to="/cookie-settings">Cookie settings</Link>
      </div>
    </footer>
  );
};

export default Footer;
