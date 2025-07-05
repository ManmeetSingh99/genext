import React from "react";
import MainLayout from "./layout/MainLayout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Map from "./components/Map";
function App() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
        <FAQSection />
        <Map/>
      </MainLayout>
    </>
  );
}

export default App;
