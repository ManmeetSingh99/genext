import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import genextLogo from "../assets/genext_logo_2.png";
import faqImg from "../assets/faq/faq.png";

const faqs = [
  {
    question: "Who does GeNext delivery reaches out to?",
    answer:
      "GeNext delivers across Belgium, covering a wide customer base including homes and businesses.",
  },
  {
    question: "How to recieve my order?",
    answer:
      "Place your order online, and we’ll deliver it to your doorstep the next day if ordered before noon.",
  },
  {
    question: "What are the prices?",
    answer:
      "Our prices are competitive and vary based on quantity. You can view the price list or request a quote.",
  },
  {
    question: "What payment method do you accept?",
    answer:
      "We accept credit/debit cards, bank transfers, and other common online payment methods.",
  },
  {
    question: "Do you take care of events?",
    answer:
      "Yes, we supply beverages for events with bulk order options and reliable delivery.",
  },
  {
    question: "Who are our suppliers?",
    answer:
      "We work with both local Belgian breweries and international beverage brands for diverse options.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-center md:mb-5 lg:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 md:gap-10 items-start">
        {/* Left - Logo */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <img
            src={genextLogo}
            alt="GeNext Logo"
            className="mt-4 w-45 md:w-full md:h-72  object-contain max-w-sm"
          />
        </div>

        {/* Right - Custom FAQs */}
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-base-300 rounded-md p-4 bg-base-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left cursor-pointer"
              >
                <span className="font-semibold text-[#585858] text-base md:text-lg cursor-pointercursor-pointer">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`ml-2 transition-transform cursor-pointer text-[#9847E6] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3 text-sm text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Illustration Image */}
      <div className="relative bg-[#B388F9] w-full h-[82px] md:h-[139px] lg:h-[195px] mt-10 flex items-center justify-between">
        {/* Text Content */}
        <div className="z-10 text-white pl-2 md:pl-16 lg:pl-32">
          <p className="text-sm md:text-3xl font-medium">Supplying sips.</p>
          <p className="text-lg md:text-3xl lg:text-4xl font-bold">
            Delivering satisfaction.
          </p>
        </div>

        {/* Can Image */}
        <img
          src={faqImg}
          alt="Soda Cans"
          className="absolute right-0 -top-8 h-30 md:h-45 lg:h-60 object-contain z-0"
        />
      </div>
    </div>
  );
}
