import React from "react";
import "./AboutSection.css";
const AboutProduct = () => {
  return (
    <div style={{ backgroundColor: "#F5F7FF" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="p-4">
              <div className="p-3">
                <div className="rounded-circle">
                  <i class="fa-solid fa-headset"></i>
                </div>
              </div>
              <div className="card-title text-center text-dark mb-3">
                Product Support
              </div>
              <div className="card-subtitle text-center">
              Up to 3 years on-site warranty available for your peace of mind.
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="p-4">
              <div className="p-3">
                <div className="rounded-circle">
                  <i class="fa-solid fa-user-tie "></i>{" "}
                </div>
              </div>
              <div className="card-title text-center text-dark mb-3">
                Personal Account
              </div>
              <div className="card-subtitle text-center">
                With big discounts, free delivery and a dedicated support
                specialist.
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="p-4">
              <div className="p-3">
                <div className="rounded-circle">
                  <i class="fa-solid fa-tags"></i>{" "}
                </div>
              </div>
              <div className="card-title text-center text-dark mb-3">
                Amazing Savings
              </div>
              <div className="card-subtitle text-center">
              Up to 70% off new Products, you can be sure of the best price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
