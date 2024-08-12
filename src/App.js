import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import DownloadSection from "./components/DownloadSection";
import HowItWorks from "./components/HowItWorks";
import FeatureHighlights from "./components/FeatureHighlights";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <HeroSection />
      <DownloadSection />
      <HowItWorks />
      <FeatureHighlights />
      <PricingSection />
      <Testimonials />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
