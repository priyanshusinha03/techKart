import React from "react";
import image1 from "../../assets/aboutcontent1.png";
import image2 from "../../assets/aboutcontent2.png";
import logoImg from "../../assets/Logo.png";
import "./AboutSection.css";

const AboutUsContent = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="container">
          <br />
          <small>
            Home{" "}
            <i
              class="fa-solid fa-chevron-left text-primary"
              style={{ fontSize: "9px", marginTop: "-5px" }}
            ></i>{" "}
            About Us
          </small>
        </div>
        <div className="container mt-2">
          <h4 style={{ fontWeight: "900" }}>About Us</h4>
        </div>
      </div>

      <>
        <div className="blackBox">
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                <div className="header-title">
                  A Family That Keeps On Growing
                </div>
                <div>
                  <div className="para-section">
                    <p>
                      We always aim to please the home market, supplying great
                      computers and hardware at great prices to non-corporate
                      customers, through our large Melbourne CBD showroom and
                      our online store.
                      <br />
                      <br />
                      Shop management approach fosters a strong customer service
                      focus in our staff. We prefer to cultivate long-term
                      client relationships rather than achieve quick sales,
                      demonstrated in the measure of our long-term success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgDiv">
                  <img
                    src={image1}
                    alt="aboutcontent1"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>{" "}
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="whiteBox">
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                <div className="imgDiv">
                  <img
                    src={image2}
                    alt="aboutcontent2"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
              <div className="col-sm-5">
                <div>
                  <div className="logoRounded">
                    <img src={logoImg} alt="" width="50px" height="auto" />
                  </div>
                  <h6 className="header-titles">Shop.com</h6>
                  <div className="para-sectiosn">
                    <p>
                      Shop is a proudly Australian owned, Melbourne based
                      supplier of I.T. goods and services, operating since 1991.
                      Our client base encompasses individuals, small business,
                      corporate and government organisations. We provide
                      complete business IT solutions, centred on high quality
                      hardware and exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutUsContent;
