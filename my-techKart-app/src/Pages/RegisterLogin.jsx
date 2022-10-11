import React from "react";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers";
import Register from "../components/RegisterSection.jsx/Register";
import AboutSection from "../components/AboutSection/AboutProduct"
const RegisterLogin = () => {
  return (
    <div>
      <Header />
      <Register />
      <AboutSection/>
      <Footer />
    </div>
  );
};

export default RegisterLogin;
