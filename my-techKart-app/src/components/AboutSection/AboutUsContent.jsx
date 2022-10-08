import React from "react";
import image1 from "../../assets/aboutcontent1.png";
import image2 from "../../assets/aboutcontent2.png";
import image3 from "../../assets/aboutcontent3.png";
import image4 from "../../assets/aboutcontent4.png";
import image5 from "../../assets/aboutcontent5.png";
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
                <div className="px-5">
                  <div className="logoRounded">
                    <i
                      class="fa-brands fa-squarespace"
                      style={{ fontSize: "20px" }}
                    ></i>
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
        <div className="blackBox">
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                <div className="header-title">
                  {" "}
                  <div className="logoRounded">
                    <i
                      class="fa-solid fa-heart"
                      style={{ fontSize: "20px" }}
                    ></i>
                    {/* <img src={logoImg} alt="" width="50px" height="auto" /> */}
                  </div>
                  You're In Safe Hands{" "}
                </div>
                <div>
                  <div className="para-section">
                    <p>
                      Experience a 40% boost in computing from last generation.
                      MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor
                      with the upmost computing power to bring you an
                      unparalleled gaming experience.
                      <br />
                      <br /> *Performance compared to i7-9700. Specs varies by
                      model.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgDiv">
                  <img
                    src={image3}
                    alt="aboutcontent3"
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
                    src={image4}
                    alt="aboutcontent4"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="p-5">
                  <div className="logoRounded">
                    <i
                      class="fa-solid fa-star"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <h6 className="header-titles">
                    The Highest Quality of Products
                  </h6>
                  <br />
                  <div className="para-sections">
                    <p>
                      We guarantee the highest quality of the products we sell.
                      Several decades of successful operation and millions of
                      happy customers let us feel certain about that. Besides,
                      all items we sell pass thorough quality control, so no
                      characteristics mismatch can escape the eye of our
                      professionals.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        <div className="blackBox">
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                <div className="header-title">
                  {" "}
                  <div className="logoRounded">
                    <i
                      class="fa-solid fa-truck"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  Delivery to All Regions{" "}
                </div>
                <div>
                  <div className="para-section">
                    <p>
                      We deliver our goods all across Australia. No matter where
                      you live, your order will be shipped in time and delivered
                      right to your door or to any other location you have
                      stated. The packages are handled with utmost care, so the
                      ordered products will be handed to you safe and sound,
                      just like you expect them to be.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgDiv">
                  <img
                    src={image5}
                    alt="aboutcontent5"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>{" "}
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Testimonial Section */}
        <div className="container"></div>
      </>
    </div>
  );
};

export default AboutUsContent;
