import React from "react";
import "./branding.css";
import brand1 from "../../assets/brandlogo1.png";
import brand2 from "../../assets/brandlogo2.png";
import brand3 from "../../assets/brandlogo3.png";
import brand4 from "../../assets/brandlogo4.png";
import brand5 from "../../assets/brandlogo5.png";
import brand6 from "../../assets/brandlogo6.png";
const Brandings = () => {
  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand1} alt="" className="img-responsivesbrand" />
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand2} alt="" className="img-responsivesbrand" />
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand3} alt="" className="img-responsivesbrand" />
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand4} alt="" className="img-responsivesbrand" />
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand5} alt="" className="img-responsivesbrand" />
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <div className="cardBrand">
              <img src={brand6} alt="" className="img-responsivesbrand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brandings;
