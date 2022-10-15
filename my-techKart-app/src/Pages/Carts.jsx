import React from "react";
import CartMenu from "../components/ShoppingCart/CartMenu";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers";
import AboutContent from "../components/AboutSection/AboutProduct"

const Carts = () => {
  return (
    <div>
      <Header />
      <CartMenu />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Carts;
