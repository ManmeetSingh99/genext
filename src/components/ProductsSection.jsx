import React from "react";
import softDrink from "../assets/products/softdrinks.png";
import iceTea from "../assets/products/icetea.png";
import energy from "../assets/products/energy.png";
import water from "../assets/products/water.png";
import juice from "../assets/products/juice.png";
import dairy from "../assets/products/dairy.png";
import belgium from "../assets/products/belgiumbeers.png";
import pols from "../assets/products/polisbeers.png";
import indian from "../assets/products/indianbeers.png";
import international from "../assets/products/internationalbeers.png";
import wine from "../assets/products/wine.png";
import whiskey from "../assets/products/whiskey.png";
import vodka from "../assets/products/vodka.png";
import rum from "../assets/products/rum.png";
import gin from "../assets/products/gin.png";
import { Link } from "react-router-dom";

const products = [
  { image: softDrink, label: "Soft Drinks" },
  { image: iceTea, label: "Ice Tea" },
  { image: energy, label: "Energy Drinks" },
  { image: water, label: "Water" },
  { image: juice, label: "Juice" },
  { image: dairy, label: "Dairy" },
  { image: belgium, label: "Belgium Beers" },
  { image: pols, label: "Pols Beers" },
  { image: indian, label: "Indian Beers" },
  { image: international, label: "International Beers" },
  { image: wine, label: "Wine" },
  { image: whiskey, label: "Whiskey" },
  { image: vodka, label: "Vodka" },
  { image: rum, label: "Rum" },
  { image: gin, label: "Gin" },
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
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center group cursor-pointer hover:scale-[1.03] hover:bg-[#f8f8f8]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-20 h-20 md:w-28 md:h-28 mb-3 lg:w-38 lg:h-38 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-xs sm:text-sm md:text-base text-[#39434d] font-semibold mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/contact">
            <button className="btn btn-outline rounded-full bg-[#39434d] font-[Poppins] hover:text-#39434d px-6 sm:px-10 text-xs text-white hover:bg-white hover:text-[#39434d] transition-all duration-300 hover:scale-105 sm:text-sm">
              Request Pricelist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
