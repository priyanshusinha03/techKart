import React from "react";
import bgImage from "../../assets/bgImage.png";
import "./ABoutProducts.css";
const ProductBannerDiv = () => {
  return (
    <div>
      <div className="d-flockWrapper">
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-6 p-4">
              <p className="p-3 text-light mt-0">
                <br />{" "}
                <h1 style={{ fontSize: "50px" }}>Outplay the Completion</h1>{" "}
                <br />
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
                <br />
                <br />
                *Performance compared to i7-9700. Specs varies by model.
              </p>
            </div>
            <div className="col-sm-6">
              <div className="imageDiv">
                <div className="bgimage"></div>
              </div>
              {/* <img
                src={bgImage}
                alt=""
                width="100%"
                className="mt-4 img-covers"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBannerDiv;
