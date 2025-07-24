import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    id: 1,
    name: "Jane Rowling",
    title: "Copywriter",
    text: "The new OptinMonster with the web backend is just amazing. This tool is worth every penny!",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Emilia Bubu",
    title: "UI/UX Designer",
    text: "We doubled our email signups. It just works. OptinMonster makes it super easy.",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 3,
    name: "Judy Dawson",
    title: "Full Stack Developer",
    text: "What’s more important is setup and making it work with my site was seamless and excellent!",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    id: 4,
    name: "Garv Mehta",
    title: "Founder",
    text: "The experience with OptinMonster has been absolutely amazing. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 5,
    name: "Elena Stokes",
    title: "Marketing Lead",
    text: "From signups to engagement, this tool changed our marketing pipeline.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;

    return [testimonials[prev], testimonials[activeIndex], testimonials[next]];
  };

  return (
    <section
      className="bg-gray-100 py-16 px-4 text-center relative overflow-hidden"
      id="testimonials"
    >
      <h3 className="text-gray-800 text-2xl md:text-5xl font-bold text-center mb-10 font-[Playfair_Display]">
        See What Our Clients Have To Say
      </h3>
      <h2 className="text-4xl text-gray-700 font-semibold mt-2 mb-10">
        Testimonials
      </h2>

      <div className="relative flex justify-center items-center max-w-7xl mx-auto px-4">
        {/* Cards */}
        <div className="flex gap-6 justify-center items-center transition-all duration-500">
          {getVisibleTestimonials().map((item, idx) => {
            const isActive = item.id === testimonials[activeIndex].id;

            return (
              <div
                key={item.id}
                className={`
                  px-6 py-6 relative mx-[-28px] rounded-sm shadow-lg transition-all duration-300
                  w-[280px] md:w-[450px]
                  ${
                    isActive
                      ? "bg-[#9D6EFF] mb-25 text-white scale-105 z-30"
                      : "bg-white text-gray-800 opacity-70 scale-95 z-20"
                  }
                `}
              >
                <div className="text-6xl flex justify-center opacity-20 mb-4">
                  <ImQuotesLeft />
                </div>
                <p className="text-sm md:text-base">{item.text}</p>

                {/* Avatar */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow"
                  />
                </div>

                {/* Name and title */}
                <div className="mt-8 mb-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Prev Button */}
      <div className=" flex justify-center gap-8">
        <button
          onClick={prevTestimonial}
          className="z-10 p-3 bg-[#9D6EFF] rounded-full shadow cursor-pointer"
        >
          <FaChevronLeft className="text-white" />
        </button>
        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className=" z-10 p-3 bg-[#9D6EFF] rounded-full shadow cursor-pointer"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
