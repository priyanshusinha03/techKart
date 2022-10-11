import React from "react";
import CoverImg2 from "../../assets/msilaptop.png";
import secondRowImg from "../../assets/msil1.png";
import secondRowImg2 from "../../assets/msil4.png";
import secondRowImg4 from "../../assets/msil5.png";
import secondRowImg5 from "../../assets/msil3.png";
import secondRowImg3 from "../../assets/msil2.png";
import Tab from "../../assets/tab.png";

const CardSection3 = () => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <div>
          <button
            className="btn btn-transparent text-secondary"
            style={{ borderBottom: "2px solid blue" }}
          >
            <strong>MSI GS Series</strong>
          </button>
        </div>
        <div>
          {" "}
          <button className="btn btn-transparent text-secondary">
            <strong>MSI GT Series</strong>
          </button>
        </div>
        <div>
          {" "}
          <button className="btn btn-transparent text-secondary">
            <strong>MSI GL Series</strong>
          </button>
        </div>
        <div>
          {" "}
          <button className="btn btn-transparent text-secondary">
            <strong>MSI GE Series</strong>
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-2">
          <div className="cardsCover">
            <div className="card-img-tops">
              <img src={CoverImg2} alt="cover Image" className="img-fluids" />
            </div>
            <div className="overLayText text-center">MSI Laptops</div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="cardsLaptop">
            <div className="imageWrap1">
              {" "}
              <img src={Tab} class="card-img-top" alt="..." />
            </div>
            <div className="imageWrap">
              {" "}
              <img src={secondRowImg5} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star text-warning"></i>
                <span className="text-secondary reviewCards">Reviews (4)</span>
              </div>
              <p class="card-texts">
                "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-Ons..
              </p>
              <span className="card-subtitiles text-secondary">
                <s style={{ textdecoration: "strikethrough" }}>$499.0</s>
              </span>
              <div className="card-newPrice">
                <h5>
                  <strong>$299.00</strong>
                </h5>
              </div>
            </div>
            <div className="cardStrip text-success">
              <span>
                <i class="bi bi-check-circle-fill text-success mx-1"></i>In
                stock
              </span>
            </div>
            <div className="cardFavIcon">
              <i class="fa-solid fa-heart"></i>{" "}
            </div>
            <div className="cardChartIcon">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div className="buttonCards">
              <button className="btn rounded-pill btn-outline-primary">
                <span className="btnFonts">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="cardsLaptop">
            <div className="imageWrap1">
              {" "}
              <img src={Tab} class="card-img-top" alt="..." />
            </div>
            <div className="imageWrap">
              {" "}
              <img src={secondRowImg} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star text-warning"></i>
                <span className="text-secondary reviewCards">Reviews (4)</span>
              </div>
              <p class="card-texts">
                "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-Ons..
              </p>
              <span className="card-subtitiles text-secondary">
                <s style={{ textdecoration: "strikethrough" }}>$499.0</s>
              </span>
              <div className="card-newPrice">
                <h5>
                  <strong>$299.00</strong>
                </h5>
              </div>
            </div>
            <div className="cardStrip text-success">
              <span>
                <i class="bi bi-check-circle-fill text-success mx-1"></i>In
                stock
              </span>
            </div>
            <div className="cardFavIcon">
              <i class="fa-solid fa-heart"></i>{" "}
            </div>
            <div className="cardChartIcon">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div className="buttonCards">
              <button className="btn rounded-pill btn-outline-primary">
                <span className="btnFonts">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="cardsLaptop">
            <div className="imageWrap1">
              {" "}
              <img src={Tab} class="card-img-top" alt="..." />
            </div>
            <div className="imageWrap">
              {" "}
              <img src={secondRowImg4} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star text-warning"></i>
                <span className="text-secondary reviewCards">Reviews (4)</span>
              </div>
              <p class="card-texts">
                "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-Ons..
              </p>
              <span className="card-subtitiles text-secondary">
                <s style={{ textdecoration: "strikethrough" }}>$499.0</s>
              </span>
              <div className="card-newPrice">
                <h5>
                  <strong>$299.00</strong>
                </h5>
              </div>
            </div>
            <div className="cardStrip text-success">
              <span>
                <i class="bi bi-check-circle-fill text-success mx-1"></i>In
                stock
              </span>
            </div>
            <div className="cardFavIcon">
              <i class="fa-solid fa-heart"></i>{" "}
            </div>
            <div className="cardChartIcon">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div className="buttonCards">
              <button className="btn rounded-pill btn-outline-primary">
                <span className="btnFonts">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="cardsLaptop">
            <div className="imageWrap1">
              {" "}
              <img src={Tab} class="card-img-top" alt="..." />
            </div>
            <div className="imageWrap">
              {" "}
              <img src={secondRowImg3} class="card-img-top" alt="..." />
            </div>{" "}
            <div className="cardStrip text-success">
              <span>
                <i class="bi bi-check-circle-fill text-success mx-1"></i>In
                stock
              </span>
            </div>
            <div class="card-body">
              <div class="card-title">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star text-warning"></i>
                <span className="text-secondary reviewCards">Reviews (4)</span>
              </div>
              <p class="card-texts">
                "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-Ons..
              </p>
              <span className="card-subtitiles text-secondary">
                <s style={{ textdecoration: "strikethrough" }}>$499.0</s>
              </span>
              <div className="card-newPrice">
                <h5>
                  <strong>$299.00</strong>
                </h5>
              </div>
            </div>
            <div className="cardFavIcon">
              <i class="fa-solid fa-heart"></i>{" "}
            </div>
            <div className="cardChartIcon">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div className="buttonCards">
              <button className="btn rounded-pill btn-outline-primary">
                <span className="btnFonts">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="cardsLaptop">
            <div className="imageWrap1">
              {" "}
              <img src={Tab} class="card-img-top" alt="..." />
            </div>
            <div className="imageWrap">
              {" "}
              <img src={secondRowImg2} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning px-1"></i>
                <i class="bi bi-star text-warning"></i>
                <span className="text-secondary reviewCards">Reviews (4)</span>
              </div>
              <p class="card-texts">
                "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-Ons..
              </p>
              <span className="card-subtitiles text-secondary">
                <s style={{ textdecoration: "strikethrough" }}>$499.0</s>
              </span>
              <div className="card-newPrice">
                <h5>
                  <strong>$299.00</strong>
                </h5>
              </div>
            </div>
            <div className="cardStrip text-success">
              <span>
                <i class="bi bi-check-circle-fill text-success mx-1"></i>In
                stock
              </span>
            </div>
            <div className="cardFavIcon">
              <i class="fa-solid fa-heart"></i>{" "}
            </div>
            <div className="cardChartIcon">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div className="buttonCards">
              <button className="btn rounded-pill btn-outline-primary">
                <span className="btnFonts">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CardSection3;
