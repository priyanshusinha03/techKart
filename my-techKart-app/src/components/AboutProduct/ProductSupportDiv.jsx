import React from "react";
import "./AboutProducts.css";
import CoverImg from "../../assets/coverSupport.png";
const ProductSupportDiv = () => {
  return (
    <div>
      <div className="d-supportbox">
        <div>
          <div className="d-flex justify-content-center">
            <div className="newCard">
              <div className="card threeCard">
                <span>
                  {" "}
                  Product Support{" "}
                  <i
                    class="fa-solid fa-arrow-right text-primary"
                    style={{ position: "absolute", right: "15px", top: "15px" }}
                  ></i>
                </span>
              </div>
              <br />
              <div className="card threeCard">
                <span>
                  {" "}
                  FAQ{" "}
                  <i
                    class="fa-solid fa-arrow-right text-primary"
                    style={{ position: "absolute", right: "15px", top: "15px" }}
                  ></i>
                </span>
              </div>
              <br />{" "}
              <div className="card threeCard">
                <span>
                  {" "}
                  Our Buyer Guide{" "}
                  <i
                    class="fa-solid fa-arrow-right text-primary"
                    style={{ position: "absolute", right: "15px", top: "15px" }}
                  ></i>
                </span>
              </div>
              <br />
            </div>{" "}
            <div id="myDIv"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSupportDiv;
