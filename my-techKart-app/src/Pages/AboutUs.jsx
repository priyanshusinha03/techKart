import React from "react";
import AboutProduct from "../components/AboutSection/AboutProduct";
import AboutUsContent from "../components/AboutSection/AboutUsContent";
import Footer from "../components/Footers";
import Header from "../components/Headers/Header";
import Testimonials from "../components/Testimonial/Testimonials";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutUsContent />
      <Testimonials />
      <AboutProduct />
      <Footer />
    </div>
  );
};

export default AboutUs;
