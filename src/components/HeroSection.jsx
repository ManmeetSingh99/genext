// components/Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import carousel1 from "../assets/Frame 153.png";
import carousel3 from "../assets/Frame 150.png";
import carousel7 from "../assets/Frame 146.png";
import carousel8 from "../assets/Frame 145.png";
import carousel9 from "../assets/Frame 144.png";
import carousel10 from "../assets/Frame 143.png";
import carousel11 from "../assets/Frame 142.png";

const slides = [
  {
    id: 1,
    image: carousel1,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 3,
    image: carousel3,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 7,
    image: carousel7,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 8,
    image: carousel8,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 9,
    image: carousel9,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 10,
    image: carousel10,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
  {
    id: 11,
    image: carousel11,
    heading: "GeNext – Your Reliable Beverage Partner",
    buttonText: "Get Started",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const threshold = 50;
    if (distance > threshold) nextSlide();
    else if (distance < -threshold) prevSlide();
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div
      className="w-full relative font-[Inter]"
      style={{ height: "85vh" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${index}`}
            className={`absolute inset-0 w-full h-[88vh] transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`slide-${index}`}
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg w-[80%] md:w-[60%] font-[Playfair_Display]">
                {slide.heading}
              </h1>
              <button
                href="#"
                className="btn btn-outline border-white font-bold text-white border-2 px-20 rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                {slide.buttonText}
              </button>
            </div>
            {/* Controls */}
            <div className="absolute lg:flex justify-between hidden transform -translate-y-1/2 left-4 right-4 top-1/2 z-20">
              <button
                onClick={prevSlide}
                className="btn btn-circle text-white border-0 bg-black/20 hover:bg-white/60 size-12"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-circle bg-black/20 text-white border-0 hover:bg-white/60 size-12"
              >
                ❯
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === current ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
