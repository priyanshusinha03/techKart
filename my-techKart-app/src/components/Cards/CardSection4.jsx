import React from "react";
import CoverImg from "../../assets/desktops.png";
import CoverImg2 from "../../assets/gmonitors.png";
import monitor from "../../assets/monitor2.png";
import monitor2 from "../../assets/monitor2.png";
import monitor3 from "../../assets/monitor3.png";
import monitor4 from "../../assets/monitor4.png";
import secondRowImg from "../../assets/d1.png";
import secondRowImg2 from "../../assets/d2.png";
import secondRowImg4 from "../../assets/d3.png";
import secondRowImg5 from "../../assets/d3.png";
import secondRowImg3 from "../../assets/d3.png";
import Tab from "../../assets/tab.png";

const CardSection4 = () => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <div>
          <button className="btn btn-transparent text-secondary" style={{borderBottom:"2px solid blue"}}>
            <strong>MSI Infinute Series</strong>
          </button>
        </div>
        <div>
          {" "}
          <button className="btn btn-transparent text-secondary">
            <strong>MSI Triden</strong>
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
            <strong>MSI Nightblade</strong>
          </button>
        </div>
      </div><br />
      <div className="row">
        <div className="col-sm-2">
          <div className="cardsCover">
            <div className="card-img-tops">
              <img src={CoverImg} alt="cover Image" className="img-fluids" />
            </div>
            <div className="overLayText text-center">Desktops</div>
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
      <div className="row">
        <div className="col-sm-2">
          <div className="cardsCover">
            <div className="card-img-tops">
              <img src={CoverImg2} alt="cover Image" className="img-fluids" />
            </div>
            <div className="overLayText text-center">Gaming Monitors</div>
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
              <img src={monitor} class="card-img-top" alt="..." />
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
              <img src={monitor2} class="card-img-top" alt="..." />
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
              <img src={monitor2} class="card-img-top" alt="..." />
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
    </div>
  );
};

export default CardSection4;
