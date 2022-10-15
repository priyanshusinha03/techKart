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
              <p className="p-3 text-light mt-4">
                <br /> <h1>Outplay the Completion</h1> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, ea error molestias id eum minima mollitia
                repudiandae perferendis aperiam illo molestiae, itaque, voluptas
                eveniet sequi autem dolorum porro quibusdam vel esse maiores
                quidem asperiores consequatur nostrum. Tempora voluptatibus
                incidunt consequatur obcaecati. Deserunt illum cupiditate
                doloribus?
              </p>
            </div>
            <div className="col-sm-6">
              <img src={bgImage} alt="" width="100%" className="mt-4 img-covers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBannerDiv;
