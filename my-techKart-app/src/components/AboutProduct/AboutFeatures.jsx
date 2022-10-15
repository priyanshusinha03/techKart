import React from "react";
import intelImg from "../../assets/intel.png";
import rtx from "../../assets/rtx.png";
import ssdImg from "../../assets/ssd.png";
import ddr4Img from "../../assets/ddr4.png";

import "./AboutProducts.css";
const AboutFeatures = () => {
  return (
    <div>
      <br />
      <div className="backgroundFeatures">
        <h2 className="text-light text-center">
          <strong>Features</strong>
        </h2>
        <div className="d-flex justify-content-center">
          <p
            className="text-center text-light mt-3"
            style={{ width: "300px", fontSize: "14px", lineHeight: "24px" }}
          >
            The MPG series brings out the best in gamers by allowing full
            expression in color with advanced RGB lighting control and
            synchronization.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="card11">
                <div className="image-cart-tops">
                  <div className="rounded-circle">
                    <img src={intelImg} alt="" className="img-fluid" />
                  </div>
                </div>{" "}
                <div className="card-subtitle text-light text-center p-2">
                  Intel® Core™ i7 processor with the upmost computing power to
                  bring you an unparalleled gaming experience.
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card11">
                <div className="image-cart-tops">
                  <div className="rounded-circle">
                    <img src={rtx} alt="" className="img-fluid mt-4" />
                  </div>
                </div>{" "}
                <div className="card11-subtitle text-light text-center p-2">
                  The new GeForce® RTX SUPER™ Series has more cores and higher
                  clocks for superfast performance compared to previous-gen
                  GPUs.
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card11">
                <div className="image-cart-tops">
                  <div className="rounded-circle">
                    <img src={ssdImg} alt="" className="img-fluid" />
                  </div>
                </div>{" "}
                <div className="card11-subtitle text-light text-center p-2">
                  Unleash the full potential with the latest SSD technology, the
                  NVM Express. 6 times faster than traditional SATA SSD.
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card11">
                <div className="image-cart-tops">
                  <div className="rounded-circle">
                    <img src={ddr4Img} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="card-subtitle text-light text-center p-2">
                  Featuring the latest 10th Gen Intel® Core™ processors, memory
                  can support up to DDR4 2933MHz to delivers an unprecedented
                  gaming experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
