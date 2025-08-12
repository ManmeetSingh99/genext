import React from "react";
import mapImage from "../assets/map_img.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-purple-600 text-2xl" />,
    title: "Address",
    content: ["Keilbroeck 4/C18", "2020 Antwerp, Belgium"],
  },
  {
    icon: <FaPhoneAlt className="text-purple-600 text-2xl" />,
    title: "Phone",
    content: ["+32 489 409 045", "+32 478 501 069"],
  },
  {
    icon: <FaEnvelope className="text-purple-600 text-2xl" />,
    title: "Email",
    content: ["business@genext.be"],
  },
];

const Map = () => {
  return (
    <section className="bg-gray-100 pt-7 pb-14 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[30px] md:text-[42px] font-bold font-[Playfair_Display] text-[#3F3F3F]">
          Find Us On Map
        </h2>
      </div>

      {/* Content Grid: Map on Left, Cards on Right */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Map Image */}
        <div className="w-full h-full">
          <img
            src={mapImage}
            alt="Map Location"
            className="rounded-3xl border-4 border-purple-400 shadow-lg w-full h-[100%] max-h-[400px] object-cover"
          />
        </div>

        {/* Right: Contact Cards Container */}
        <div className="bg-purple-100 rounded-3xl p-6 w-full h-full flex flex-col justify-center shadow-lg">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-100 rounded-2xl p-4 shadow-md transition-transform hover:scale-105 duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#3F3F3F] font-[Poppins] mb-1">
                    {info.title}
                  </h4>
                  {info.content.map((line, i) => (
                    <p key={i} className="text-sm text-gray-600 font-[Poppins]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
