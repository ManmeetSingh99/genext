import React from "react";
import softDrink from "../assets/products/softdrinks.png";
import iceTea from "../assets/products/icetea.png";
import energy from "../assets/products/energy.png";
import water from "../assets/products/water.png";
import juice from "../assets/products/juice.png";
import dairy from "../assets/products/dairy.png";
import belgian from "../assets/products/belgiumbeers.png";
import pols from "../assets/products/polisbeers.png";
import indian from "../assets/products/indianbeers.png";
import international from "../assets/products/internationalbeers.png";
import wine from "../assets/products/wine.png";
import whiskey from "../assets/products/whiskey.png";
import drum from "../assets/products/bergenbeer.png";
import tonic from "../assets/products/Schweppes.png";
import { Link } from "react-router-dom";
import { FiClipboard } from "react-icons/fi"; // 📋 Clipboard icon

const products = [
  { image: softDrink, label: "Soft Drinks" },
  { image: iceTea, label: "Ice Tea" },
  { image: energy, label: "Energy Drinks" },
  { image: water, label: "Water" },
  { image: juice, label: "Juice" },
  { image: dairy, label: "Dairy" },
  { image: belgian, label: "Belgian Beers" },
  { image: pols, label: "Polis Beers" },
  { image: indian, label: "Indian Beers" },
  { image: international, label: "International Beers" },
  { image: wine, label: "Wine" },
  { image: whiskey, label: "Spirits" },
  { image: tonic, label: "Tonic Water" },
  { image: drum, label: "Green Bergen" },
];

export default function ProductsSection() {
  return (
    <section className="bg-gray-100 w-full pt-8">
      <div className="px-4 md:px-10 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-10 font-[Playfair_Display]">
          Wide Range of Products
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 font-[Poppins]">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center group cursor-pointer border border-transparent hover:border-[#8847E6] hover:scale-[1.03] 
      bg-gradient-to-br from-[#f6f1fc] via-[#ece1fc] to-[#e0d0fb]"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.label}
                  className={`mb-3 transition-transform duration-300 group-hover:scale-105 
            ${
              ["Dairy", "Water", "Ice Tea", "Belgian Beers"].includes(
                item.label
              )
                ? "w-42 h-32 md:w-52 md:h-40"
                : "w-20 h-20 md:w-28 md:h-28 lg:w-42 lg:h-42"
            }`}
                />

              </div>

              <p className="text-xs sm:text-sm md:text-base text-[#39434d] font-semibold mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/contact">
            <button className="btn rounded-full bg-gradient-to-r from-[#8847E6] to-[#2575fc] text-white font-[Poppins] px-6 sm:px-10 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-none tracking-wide flex items-center gap-2">
              <FiClipboard className="text-lg sm:text-xl" />
              <span className="group-hover:tracking-widest transition-all duration-300">
                Request Pricelist
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
