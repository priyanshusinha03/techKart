import React from "react";
import "./AboutProducts.css";
import InputColor from "react-input-color";
import Images from "../../assets/bannerAbout.png";
const AboutDetails = () => {
  const [color, setColor] = React.useState({});
  return (
    <div>
      <div className="d-block bg-backGround p-5">
        <div className="">
          <div className="row flex-row-reverse">
            <div className="col-sm-5">
              {" "}
              <img
                src={Images}
                alt=""
                width="260px"
                className="img-responsive"
              />
            </div>
            <div className="col-sm-7">
              <div className="container">
                <div className="row">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <span style={{ fontSize: "10px" }}>
                      Home . Laptops .{" "}
                      <span className="text-secondary">MS WS Series</span>
                    </span>
                    <br />
                    <br />
                    <h6 className="headingAbout">MSI MPG Trident 3</h6>
                    <small className="text-primary">
                      Be the first to review this product
                    </small>
                    <p className="paraAbout">
                      MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
                      16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming
                      Keyboard and Mouse 3 Years Warranty Gaming Desktop
                    </p>{" "}
                    <br />{" "}
                    <div className="d-flex">
                      <div className="rounded-circle">
                        <InputColor
                          initialValue="#4B4D4F"
                          onChange={setColor}
                          placement="right"
                        />
                        {/* <div
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 20,
                          backgroundColor: color.rgba,
                        }}
                      /> */}
                      </div>
                      <div className="rounded-circle mx-2">
                        <InputColor
                          initialValue="#F2E9DC"
                          onChange={setColor}
                          placement="right"
                        />
                        {/* <div
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 20,
                          backgroundColor: color.rgba,
                        }}
                      /> */}
                      </div>
                      <div className="rounded-circle">
                        <InputColor
                          initialValue="#EAE8EB"
                          onChange={setColor}
                          placement="right"
                        />
                        {/* <div
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 20,
                          backgroundColor: color.rgba,
                        }}
                      /> */}
                      </div>
                    </div>
                    <h6 className="mt-3" style={{ fontSize: "14px" }}>
                      <strong>Have a question ? </strong>{" "}
                      <a href="" className="text-primary">
                        <u>Contact Us</u>
                      </a>
                    </h6>
                    <br />
                    <h6 className="mt-5">
                      <strong><i className="fa-regular fa-add mx-2"></i> More Information</strong>
                    </h6>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
