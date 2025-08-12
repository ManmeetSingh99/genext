import React from "react";
import kingfisher from "../assets/contact/kingfisher.png";
import stony from "../assets/contact/stony_cape.png";
import sula from "../assets/contact/sula.png";
import mogu from "../assets/contact/Mogu.png";
import foco from "../assets/contact/foco.png";
import cobra from "../assets/contact/cobra.png";
import contactBg from "../assets/contact/contact.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaWineBottle,
  FaShippingFast,
  FaCalendarAlt,
  FaRegClock,
  FaWineGlassAlt,
} from "react-icons/fa";

const contactCards = [
  {
    icon: (
      <FaWineBottle className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "One Stop Shop For Beverages",
    subtitle: "Your favorite drinks, all in one place.",
  },
  {
    icon: (
      <FaShippingFast className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "Delivery In 6 Hours!",
    subtitle: "Order by noon — enjoy same-day delivery.",
  },
  {
    icon: (
      <FaCalendarAlt className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "Delivers Six Days A Week",
    subtitle: "We’re on the road every day except Monday.",
  },
  {
    icon: (
      <FaRegClock className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "Weekend Delivery? Yes!",
    subtitle: "Closed only on Mondays",
  },
];

const drinkImages = [
  { id: 1, src: kingfisher, alt: "Kingfisher" },
  { id: 2, src: stony, alt: "Stony Cape" },
  { id: 3, src: sula, alt: "Sula" },
  { id: 4, src: mogu, alt: "Perla" },
  { id: 5, src: foco, alt: "Foco" },
  { id: 6, src: cobra, alt: "Cobra" },
];
export default function ContactSection() {
  return (
    <section className="bg-gray-100 w-full sm:pt-6 lg:pt-10">
      <div className="w-full">
        {/* Top Purple Banner */}
        <div className="bg-[#9D6EFF] rounded-3xl p-6 md:p-8 w-[80%] md:w-[70%] lg:w-[85%] mx-auto text-white text-center">
          <h2 className="text-md md:text-2xl lg:text-4xl text-left font-bold mb-2 lg:mb-6 font-[Playfair_Display]">
            Rare to Find? Easy with GeNext.
          </h2>
          {/* Swiper for large screens */}
          <div className="hidden lg:block">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
              className="mySwiper"
            >
              {drinkImages.map((drink, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={drink.src}
                    alt={drink.alt}
                    className="w-52 h-52 object-contain rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-120 bg-[#CAB1FF] mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Carousel for md and below */}
          <div className="block lg:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 2.5 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 2.5 },
              }}
              className="mySwiper"
            >
              {drinkImages.map((drink, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={drink.src}
                    alt={drink.alt}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 bg-[#CAB1FF] mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info + Icons Section */}
        <div className="text-center my-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#39434d]">
            Easy Order Online
          </h3>
          <div className="lg:w-[80%] lg:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-2">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 px-2"
              >
                <div className="rounded-full">{card.icon}</div>
                <div className="font-bold text-sm md:text-base text-[#39434d]">
                  {card.title}
                </div>
                <div className="text-xs md:text-sm text-gray-700 max-w-[200px]">
                  {card.subtitle}
                </div>
              </div>
            ))}
          </div>

          <Link to="/contact">
            <button className="btn mt-8 px-10 py-6 text-white text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-[#9D6EFF] to-[#6C4EFF] shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
              <span className="mb-2" style={{ fontSize: "2rem" }}>
                🚚
              </span>{" "}
              Contact Us For Order
            </button>
          </Link>
        </div>

        {/* Bottom CTA Section */}
        <div
          className="relative w-full h-[250px] bg-cover bg-center flex items-center justify-center text-white text-center "
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2 font-[Playfair_Display]">
              Can’t Find It? GeNext Still Gets It.
            </h2>
            <p className="text-sm md:text-base mb-4 font-[Poppins]">
              Looking for a specific brand or beverage not listed on our site?
              Don’t worry GeNext will get it.
            </p>
            <Link to="/contact">
              <div className="flex justify-center mt-6">
                <button
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9D6EFF] to-[#6C3EFF] text-white font-semibold text-sm md:text-base rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}
                >
                  <FaWineGlassAlt className="w-5 h-5" />
                  Request Custom Drink
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
