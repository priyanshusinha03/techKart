import React from "react";
import BannerImage from "../../assets/msibanner.png"

const BannerMSI = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img
              src={BannerImage}
              alt="MSI Banner Image"
              className="img-fluid img-responsive"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMSI;
