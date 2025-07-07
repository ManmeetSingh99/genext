import React from "react";
import { FaWineBottle, FaShippingFast, FaCalendarAlt } from "react-icons/fa";
import kingfisher from "../assets/contact/kingfisher.png";
import stony from "../assets/contact/stony_cape.png";
import sula from "../assets/contact/dindori.png";
import perla from "../assets/contact/perla.png";
import contactBg from "../assets/contact/contact.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const contactCards = [
  {
    icon: (
      <FaWineBottle className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "One stop shop for beverages",
    subtitle: "",
  },
  {
    icon: (
      <FaShippingFast className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "Order by noon, get it next day",
    subtitle: "",
  },
  {
    icon: (
      <FaCalendarAlt className="text-[#9D6EFF] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
    ),
    title: "Deliveries five days a week",
  },
];
const drinkImages = [
  { id: 1, src: kingfisher, alt: "Kingfisher" },
  { id: 2, src: stony, alt: "Stony Cape" },
  { id: 3, src: sula, alt: "Sula" },
  { id: 4, src: perla, alt: "Perla" },
];
export default function ContactSection() {
  return (
    <div className="w-full mt-8 lg:mt-10">
      {/* Top Purple Banner */}
      <div className="bg-[#9D6EFF] rounded-3xl p-6 md:p-8 w-[80%] md:w-[70%] lg:w-[80%] mx-auto text-white text-center">
        <h2 className="text-md md:text-2xl lg:text-4xl text-left font-bold mb-2 lg:mb-6 font-[Playfair_Display]">
          Rare to Find? Easy with GeNext.
        </h2>
        {/* Static Images for lg and above */}
        <div className="hidden lg:grid grid-cols-4 gap-4 justify-items-center">
          {drinkImages.map((drink, i) => (
            <img
              key={i}
              src={drink.src}
              alt={drink.alt}
              className="w-35 h-35 md:w-40 lg:w-50 md:h-40 lg:h-50 object-contain rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 bg-[#CAB1FF]"
            />
          ))}
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

        <div className="flex flex-row justify-center gap-3  mt-8">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col md:w-[25%] lg:w-[20%] gap-4 md:flex-row items-center justify-center"
            >
              <div className="rounded-full">{card.icon}</div>
              <div className="font-bold text-sm md:text-lg text-[#39434d]">
                {card.title}
              </div>
              <div className="text-sm text-gray-700">{card.subtitle}</div>
            </div>
          ))}
        </div>

        <button className="btn bg-[#39434d] text-white mt-8 px-8 py-2 rounded-full hover:bg-gray-800">
          Contact Us
        </button>
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
          <button className="btn bg-white text-[#39434d] font-semibold px-6 rounded-md font-[Poppins] hover:bg-gray-100">
            Request Custom Drink
          </button>
        </div>
      </div>
    </div>
  );
}
