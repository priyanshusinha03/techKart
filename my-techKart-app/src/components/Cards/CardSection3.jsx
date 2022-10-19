import React from "react";
import CoverImg2 from "../../assets/msilaptop.png";
import secondRowImg from "../../assets/msil1.png";
import secondRowImg2 from "../../assets/msil4.png";
import secondRowImg4 from "../../assets/msil5.png";
import secondRowImg5 from "../../assets/msil3.png";
import secondRowImg3 from "../../assets/msil2.png";
import Tab from "../../assets/tab.png";
import listData from "./cardJson.json";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CardSection3 = () => {
  const [cartData, setCartData] = React.useState(listData.card_section_3_data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 5,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "0px",
          padding: "0px",
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    slidesToScroll: 1,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

        <div className="col-sm-10 ">
          <Slider {...settings}>
            {cartData.map((item) => (
              <>
                <Link to="/product-details">
                  <div class="cardsLaptop">
                    <div className="imageWrap1">
                      {" "}
                      <img src={Tab} class="card-img-top" alt="..." />
                    </div>
                    <div className="imageWrap">
                      {" "}
                      <img
                        src={
                          item.img_url.includes("msi")
                            ? secondRowImg3
                            : secondRowImg4
                        }
                        class="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div class="card-body">
                      <div class="card-title">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning px-1"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning px-1"></i>
                        <i class="bi bi-star text-warning"></i>
                        <span className="text-secondary reviewCards">
                          Reviews (4)
                        </span>
                      </div>
                      <p class="card-texts">{item.name}</p>
                      <span className="card-subtitiles text-secondary">
                        <s style={{ textdecoration: "strikethrough" }}>
                          $499.0
                        </s>
                      </span>
                      <div className="card-newPrice">
                        <h5>
                          <strong>$299.00</strong>
                        </h5>
                      </div>
                    </div>
                    <div className="cardStrip text-success">
                      <span>
                        <i class="bi bi-check-circle-fill text-success mx-1"></i>
                        In stock
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
                </Link>
              </>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CardSection3;
