import React from "react";
import MainLayout from "../layout/MainLayout";
import { FaGavel } from "react-icons/fa";

const TermsOfUse = () => {
  return (
    <MainLayout>
      <div className="min-h-[90vh] bg-gradient-to-bl from-white via-purple-50 to-purple-100 px-4 py-10 flex items-center justify-center mt-14">
        <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <FaGavel className="text-purple-700 text-3xl" />
            <h1 className="text-3xl font-bold text-gray-800">Terms of Use</h1>
          </div>

          <div className="space-y-6 text-gray-700 text-sm sm:text-base max-h-[65vh] overflow-y-auto pr-2">
            <p>
              Welcome to GenNext Beverages. By accessing or using our website,
              you agree to be bound by these terms and conditions.
            </p>

            <h2 className="font-semibold text-lg text-purple-700">
              1. Use of Site
            </h2>
            <p>
              This website is intended for personal, non-commercial use. You
              agree not to misuse the site or its content in any way.
            </p>

            <h2 className="font-semibold text-lg text-purple-700">
              2. Intellectual Property
            </h2>
            <p>
              All content on this website, including logos, designs, and
              visuals, is the property of GenNext Beverages and is protected by
              copyright laws.
            </p>

            <h2 className="font-semibold text-lg text-purple-700">
              3. Limitation of Liability
            </h2>
            <p>
              GenNext Beverages shall not be held liable for any direct or
              indirect damages resulting from your use of our website.
            </p>

            <h2 className="font-semibold text-lg text-purple-700">
              4. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of the website signifies your acceptance of the changes.
            </p>

            <h2 className="font-semibold text-lg text-purple-700">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall
              be subject to the jurisdiction of Raipur, Chhattisgarh.
            </p>

            <p className="italic text-sm text-gray-500">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfUse;
