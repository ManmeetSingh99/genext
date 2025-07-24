import React from "react";
import bottleImage from "../assets/contact/bottle.png";
import MainLayout from "../layout/MainLayout";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] bg-white flex items-center justify-center p-4 mt-22">
        <div className="relative bg-white rounded-3xl shadow-2xl border border-purple-200 flex flex-col md:flex-row max-w-6xl w-full overflow-hidden z-10">
          {/* Left Section: Image + Info */}
          <div className="md:w-1/2 w-full bg-white flex md:flex-col items-center shadow-lg z-100 justify-center p-6 gap-4">
            <img
              src={bottleImage}
              alt="Bottle"
              className="w-32 sm:w-40 md:w-3/4 max-w-[250px] hover:scale-110 transition-transform duration-300 object-contain"
            />
            <div className="flex flex-col justify-center space-y-4 text-gray-700 w-full px-2 sm:px-4 md:px-6 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-full">
                  <MdLocalPhone className="text-white text-xl sm:text-2xl" />
                </div>
                <p>+1 254 8547 956</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-full">
                  <MdEmail className="text-white text-xl sm:text-2xl" />
                </div>
                <p>sachdeva@coin.sin</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-full">
                  <MdLocationOn className="text-white text-xl sm:text-2xl" />
                </div>
                <p>
                  3891 Ranchview Dr. Richardson,
                  <br />
                  California 62639
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-1/2 w-full p-6 sm:p-10 bg-gradient-to-br from-white to-purple-200 z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Get in Touch
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Any question or remarks? Let us know!
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Type your message here"
                className="textarea textarea-bordered w-full h-32"
              />
              <button className="btn bg-black w-full text-white hover:bg-purple-700 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
