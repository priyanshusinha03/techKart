import React from "react";
import Header from "../components/Headers/Header";
import Footers from "../components/Footers";
import BannerMSI from "../components/BannerCarousel/BannerMSI";
import AboutProduct from "../components/AboutSection/AboutProduct";
import SliderCards from "../components/Cards/SliderCards";
import CardSection2 from "../components/Cards/CardSection2";
import CardSection4 from "../components/Cards/CardSection4";
import CardSection3 from "../components/Cards/CardSection3";
import NewsOffer from "../components/News&Offers/Index";
import Testimonial from "../components/Testimonial/Testimonials";
import Brandings from "../components/BrandingPromotions/Brandings";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="main-parent">
        <BannerMSI />
        <div className="container">
          <SliderCards />
          <br />{" "}
          <div className="bg-cards">
            <div className="text-center">
              <span
                style={{
                  backgroundColor: "#272560",
                  color: "white",
                  padding: "2px 6px",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                ZIP
              </span>{" "}
              own it now, up to 6 months interest free learn more
            </div>
          </div>{" "}
          <CardSection2 />
          <CardSection3 />
          <CardSection4 />
          <Brandings />
          <NewsOffer />
        </div>
        <Testimonial />
        <AboutProduct color={true} />
      </div>
      <Footers />
    </div>
  );
};

export default LandingPage;
