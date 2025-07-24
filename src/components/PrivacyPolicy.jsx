import React from "react";
import MainLayout from "../layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] bg-white flex items-center justify-center p-4 mt-20">
        <div className="max-w-4xl w-full bg-gradient-to-br from-white to-purple-100 p-8 rounded-3xl shadow-xl border border-purple-200 text-gray-800">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
            Privacy Policy
          </h1>
          <p className="mb-4">
            At GenNext Beverages, we respect your privacy. This Privacy Policy
            outlines how your personal data is collected, used, and protected
            when you use our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide voluntarily, including your name,
            email address, and message content through our contact forms. We may
            also collect usage data via cookies and analytics tools.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Your data is used to respond to inquiries, improve our services, and
            personalize your experience. We never sell your data to third
            parties.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We use secure technologies to protect your data and limit access
            only to authorized personnel. However, no method of transmission
            over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
            4. Third-Party Services
          </h2>
          <p className="mb-4">
            We may use third-party tools (e.g., Google Analytics) which may
            collect anonymized data. Please refer to their respective policies
            for more information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
            5. Your Rights
          </h2>
          <p className="mb-4">
            You have the right to request access to your data or ask us to
            delete it. Contact us at{" "}
            <span className="text-purple-700 font-medium">
              privacy@genext.com
            </span>{" "}
            for assistance.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            This policy is effective as of July 2025 and may be updated
            periodically.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
