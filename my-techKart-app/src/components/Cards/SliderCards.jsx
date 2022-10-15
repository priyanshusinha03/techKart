import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./main.css";
import Img1 from "../../assets/lappy1.png";
import Img2 from "../../assets/msi1.png";
import Tab from "../../assets/tab.png";
import listData from "./cardJson.json";

const SliderCards = () => {
  const [cartData, setCartData] = useState(listData.list_data);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 6,
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
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
      <div>
        <div>
          <div className="d-flex justify-content-between my-3">
            <div>
              <h4>
                <strong>New Products</strong>
              </h4>
            </div>
            <div>
              <a
                href=""
                style={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                <p>
                  <u> See all new products</u>
                </p>
              </a>
            </div>
          </div>
        </div>
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
                      src={item.img_url.includes("msi1") ? Img1 : Img2}
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
  );
};

export default SliderCards;
