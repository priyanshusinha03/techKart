import React from "react";
import "./Footers.css";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-Dark p-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="text-light">Sign Up To Our Newsletter.</h3>
              <p style={{ fontWeight: "550", color: "gray" }}>
                Be the first to hear about the latest offers.
              </p>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="d-flex justify-content-around">
                <div>
                  <input
                    type="text"
                    width={100}
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  {" "}
                  <button
                    style={{ fontSize: "14px", marginLeft: "10px" }}
                    className="btn btn-primary rounded-pill px-4 py-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-4 mt-2">
              
            </div>
            <div className="col-sm-2 mt-2">
              {" "}
              <button style={{fontSize:"14px"}} className="btn btn-primary rounded-pill px-4 py-2">
                Subscribe
              </button>
            </div>{" "} */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <ul className="footer-Header">Information</ul>
              <ul className="nav-footer">
                <li>About Us</li>
                <li>About Zip</li>
                <li>Privacy Policy</li>
                <li>Search</li>
                <li>Terms</li>
                <li>Orders and Returns</li>
                <li>Contact Us</li>
                <li>Advanced Search</li>
                <li>Newsletter Subscription</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="footer-Header"> PC Parts</ul>
              <ul className="nav-footer">
                <li>CPUs</li>
                <li>Add on Cards</li>
                <li>Hard Drives(internal)</li>
                <li>Graphic Cards</li>
                <li>Keyboards / Mice</li>

                <li>Cases / Power Supplies / Cooling</li>
                <li>RAM (Memory)</li>
                <li>Software</li>
                <li>Spearkers / Headsets</li>
                <li>Motherboards</li>
              </ul>
            </div>{" "}
            <div className="col-sm-2">
              <ul className="footer-Header">Desktop PCs</ul>{" "}
              <ul className="nav-footer">
                <li>Custom PCs</li>
                <li>Servers</li>
                <li>MSI All-In-One PCs</li>
                <li>HP Compaq PCs</li>
                <li>ASUS PCs</li>
                <li>Tecs PCs</li>
              </ul>
            </div>{" "}
            <div className="col-sm-2">
              <ul className="footer-Header">Laptops</ul>
              <ul className="nav-footer">
                <li>Everyday Use Notebooks</li>
                <li>MSI Workstation Series</li>
                <li>MSI Prestige Series</li>
                <li>Tablets and Pads</li>
                <li>Netbooks</li>
                <li>Inifinity Gaming Notebooks</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="footer-Header">Address </ul>
              <ul className="nav-footer">
                <li>Address: 1234 Street Address City Address, 1234</li>
                <li>
                  Phones:{" "}
                  <a href="tel:+" style={{ textDecoration: "none" }}>
                    {" "}
                    (0,0) 1234 5678
                  </a>
                </li>
                <li>We are open: Monday - Thursday: 9:00AM -5:30PM</li>
                <li>Friday : 9:00AM - 6:00 PM</li>
                <li>Saturday : 11:00AM - 5:00 PM</li>

                <li>
                  Email:{" "}
                  <a href="mailto:" style={{ textDecoration: "none" }}>
                    shop@gmail.com
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-4">
            <div className="footer-Header d-flex justify-content-between">
              <div>
                <i className=" text-light bi bi-facebook"></i>
                <span className="px-3">
                  {" "}
                  <i className="text-light bi bi-instagram"></i>
                </span>
              </div>
              <h6>Copyright @ 2022 Shop Pvt. Ltd.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
