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
    <div className="mt-6 px-4 md:px-10 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Wide Range of Products
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-20 h-20 md:w-28 md:h-28 lg:w-38 lg:h-38"
            />
            <p className="text-xs sm:text-sm md:text-base font-semibold mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="btn btn-outline rounded-full bg-[#201f22] text-white hover:bg-white hover:text-black px-6 sm:px-10 text-xs sm:text-sm">
          Request Pricelist
        </button>
      </div>
    </div>
  );
}
