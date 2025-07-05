import React from "react";
import mapImage from "../assets/map_img.svg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Map = () => {
  return (
    <section className=" bg-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[30px] md:text-[45px] font-medium text-center mb-6">
          Find Us On Map
        </h2>
        <img
          src={mapImage}
          alt="Map Location"
          className="rounded-[22px] md:rounded-[26px] lg:rounded-[44px] w-[80%] md:w-[45%] border border-purple-400"
        />
        <div className="flex flex-col md:flex-row justify-between my-6 gap-4 ">
          <div className="flex items-center gap-4 border-4 border-purple-400 rounded-4xl p-2 md:p-4 w-full md:w-1/3">
            <FaMapMarkerAlt className="text-purple-600 text-xl w-7 h-7" />
            <div>
              <p className="text-sm font-semibold ">Address</p>
              <p className="text-sm text-[#A175FE]">
                Keilbroeck 4/C18, 2020 Antwerp, Belgium
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-4 border-purple-400 rounded-4xl p-2 md:p-4 w-full md:w-1/3">
            <FaPhoneAlt className="text-purple-600 text-xl w-7 h-7" />
            <div>
              <p className="text-sm font-semibold">Contact Number</p>
              <p className="text-sm text-[#A175FE]">1234567890</p>
              <p className="text-sm text-[#A175FE]">1234567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-4 border-purple-400 rounded-4xl p-2 md:p-4 w-full md:w-1/3">
            <FaEnvelope className="text-purple-600 text-xl w-7 h-7" />
            <div>
              <p className="text-sm font-semibold ">Email</p>
              <p className="text-sm text-[#A175FE]">abc@genext.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
