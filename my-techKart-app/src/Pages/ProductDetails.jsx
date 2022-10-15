import React from "react";
import AboutDetails from "../components/AboutProduct/AboutDetails";
import AboutFeatures from "../components/AboutProduct/AboutFeatures";
import ProductBannerDiv from "../components/AboutProduct/ProductBannerDiv";
import ProductSupportDiv from "../components/AboutProduct/ProductSupportDiv";
import TopNavigation from "../components/AboutProduct/TopNavigation";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers";
import AboutProduct from "../components/AboutSection/AboutProduct";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <div style={{ position: "sticky", top: "120px", zIndex: "112" }}>
        <TopNavigation />
      </div>
      <AboutDetails />
      <ProductBannerDiv />
      <ProductSupportDiv />
      <AboutFeatures />

      <AboutProduct />
      <Footer />
    </div>
  );
};

export default ProductDetails;
