import React from "react";
import { FaTruck, FaGlobe } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import genextCardImg from "../assets/about.svg"; // Replace with your image path
import { FiMail } from "react-icons/fi";

const cards = [
  {
    icon: (
      <FaTruck className="text-[#9D6EFF] w-16 h-16 lg:w-28 lg:h-28 text-5xl" />
    ),
    title: "6–Hour Delivery",
    desc: "Anywhere in Antwerp, full belgium in coverage",
  },
  {
    icon: (
      <FaGlobe className="text-[#9D6EFF] w-16 h-16 lg:w-20 lg:h-20 text-5xl" />
    ),
    title: "Wide range",
    desc: "All types of Drinks: Water, Soft Drinks, Juice, Beer, Wine & Spirits",
  },
  {
    icon: (
      <AiFillDollarCircle className="text-[#9D6EFF] w-18 h-18 lg:w-22 lg:h-22  text-5xl" />
    ),
    title: "Wholesale Prices",
    desc: "Competitive rates for business",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white w-full mt-20 font-[Poppins]">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-6 font-[Playfair_Display]">
        Why Choose <span className="text-[#9D6EFF]">GeNext</span>?
      </h2>

      {/* Icon Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 mx-auto w-[90%] lg:w-[70%] max-w-4xl lg:max-w-6xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center text-left w-[80%] md:w-[60%] bg-white rounded-lg p-4 lg:flex-row lg:text-center lg:flex-1 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
          >
            <div
              className={`rounded-full mr-2 md:mr-4 lg:mr-4  lg:mb-4 flex-shrink-0 ${
                card.icon.type === AiFillDollarCircle ? "" : ""
              }`}
            >
              {card.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-sm font-semibold leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About Card */}
      <div className="mt-4 bg-[#E6D6FC] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <img
          src={genextCardImg}
          alt="GeNext"
          className="w-[60%] md:w-[40%] lg:w-[38%] rounded-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-black mb-4 font-[Playfair_Display]">
            About GeNext Beverages
          </h3>
          <p className="text-gray-700 text-lg mb-6 font-medium leading-relaxed max-w-xl font-[Inter]">
            At GeNext Beverages, we specialize in sourcing, trading, and
            distributing a diverse portfolio of premium alcoholic and
            non-alcoholic beverages.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn border border-[#8847E6] bg-black text-white  hover:bg-[#8847E6] hover:text-white font-[Inter] flex items-center justify-center gap-2"
          >
            <FiMail className="text-lg" />
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
