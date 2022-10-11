import React from "react";
import Header from "../components/Headers/Header";
import Footers from "../components/Footers";
import BannerMSI from "../components/BannerCarousel/BannerMSI";
import AboutProduct from "../components/AboutSection/AboutProduct";
import SliderCards from "../components/Cards/SliderCards";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="main-parent">
        <BannerMSI />
        <div className="container">
          <SliderCards />
        </div>
        <AboutProduct />
      </div>
      <Footers />
    </div>
  );
};

export default LandingPage;
