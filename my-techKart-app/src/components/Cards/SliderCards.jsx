import React, { useState } from "react";
import Slider from "react-slick";
import "./main.css";
import Img1 from "../../assets/lappy1.png";
import Img2 from "../../assets/msi1.png";
import listData from "./cardJson.json";

const SliderCards = () => {
  const [cartData, setCartData] = useState(listData.list_data);
  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "red" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "green" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 1,
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
                <strong>Products</strong>
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
          <div>
            <div class="cardsLaptop">
              <img src={Img1} class="card-img-top" alt="..." />
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
                <p class="card-texts">
                  EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
                  All-In-On...
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
            </div>{" "}
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderCards;
