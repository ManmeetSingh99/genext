// App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Pages & Sections
import MainLayout from "./layout/MainLayout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Map from "./components/Map";
import ContactUsInner from "./components/ContactUsInner";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import "./index.css";
import Testimonials from "./components/Testimonials";

// HomePage.jsx
export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId =
      location.state?.scrollTo || window.location.hash.replace("#", "");

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <MainLayout>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="products">
        <ProductsSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="map">
        <Map />
      </section>
    </MainLayout>
  );
};

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUsInner />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
