import React from "react";
import bottleBg from "../assets/contact/bottle_contact.png";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import MainLayout from "./../layout/MainLayout";

const ContactUs = () => {
  return (
    <MainLayout>
      <div
        className="min-h-screen flex items-center justify-center px-4 sm:px-0 bg-[#EFD4FF] bg-no-repeat bg-left bg-contain relative"
        style={{
          backgroundImage: `url(${bottleBg})`,
          backgroundSize: "contain",
          backgroundPosition: "left",
        }}
      >
        {/* Main Absolute Card (slightly shifted right) */}
        <div className="absolute right-4 sm:right-10 md:right-20 lg:right-16 z-10">
          <div className="flex flex-col md:flex-row w-[55vw] max-w-5xl bg-white/10 backdrop-blur-lg border-2 border-white/70 rounded-4xl shadow-xl overflow-hidden">
            {/* Left: Contact Info */}
            {/* Left: Contact Info */}
            <div className="md:w-1/2 lg:w-[500px] p-6 sm:p-8 flex flex-col justify-start items-center space-y-6 text-purple-900 bg-white/20">
              <h2 className="md:text-4xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600">
                Get in Touch !
              </h2>
              <div className="space-y-2 w-full">
                {[
                  {
                    icon: MdLocationOn,
                    text: `Kielsbroek 4/C18, 
                    2020 Antwerp, Belgium`,
                  },
                  {
                    icon: MdPhone,
                    text: (
                      <>
                        +32 489 409 045 <br /> +32 478 501 069
                      </>
                    ),
                  },
                  { icon: MdEmail, text: "business@genext.be" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-white/30 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-3xl text-purple-800" />
                    </div>
                    <span className="text-sm sm:text-base whitespace-pre-line">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full p-6 sm:p-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md bg-[#E4D2F9] text-purple-900 placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md bg-[#E4D2F9] text-purple-900 placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-md bg-[#E4D2F9] text-purple-900 placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#A56CF4] hover:bg-[#8e50ec] transition-all text-white font-semibold py-3 rounded-lg shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
