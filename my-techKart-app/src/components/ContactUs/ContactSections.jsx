import React from "react";
import "./Contacts.css";

const ContactSections = () => {
  return (
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
          Contact Us
        </small>
      </div>
      <div className="container mt-4 mb-2">
        <h4 style={{ fontWeight: "900" }}>Contact Us</h4>

        <p style={{ fontSize: "14px" }}>
          We love hearing from you, our shop customers
        </p>
        <p style={{ marginTop: "-10px", fontSize: "14px" }}>
          Please contact us and we will make sure to get back to as we possibly
          can.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="">
                    Your Name <span className="text-danger">*</span>{" "}
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />{" "}
                  <br />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="">
                    Your Email <span className="text-danger">*</span>{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />{" "}
                  <br />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="">
                    Your Phone Number <span className="text-danger">*</span>{" "}
                  </label>
                  <br />
                  <input
                    type="mobile"
                    maxLength={10}
                    className="form-control"
                    placeholder="Your Phone"
                  />{" "}
                  <br />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="">
                    What's on your mind ? <span className="text-danger">*</span>
                  </label>
                  <br />
                  <textarea
                    style={{ width: "100%" }}
                    type="text"
                    rows="6"
                    placeholder="Got us a note and we'll get back to you as quickly as possible"
                  />
                  <br />
                </div>
                <div>
                  <br />
                  <button
                    className="btn btn-primary rounded-pill"
                    style={{ padding: "12px 25px", fontSize: "15px" }}
                  >
                    Submit
                  </button>
                  <br />
                  <br />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="cardContact">
              <div className="pillCards">
                <div className="leftElements1">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="rightElements1">
                  <strong>Address:</strong>
                  <br />
                  1234 street Address City, 1234
                </div>
              </div>
              <br />
              <div className="pillCards">
                <div className="leftElements1">
                  <i class="fa-solid fa-phone"></i>{" "}
                </div>
                <div className="rightElements1">
                  <strong>Phone : </strong>
                  <br />
                  (0,0)1234 5678
                </div>
              </div>
              <br />
              <div className="pillCards">
                <div className="leftElements1">
                <i class="fa-regular fa-clock"></i>
                </div>
                <div className="rightElements1">
                  <strong>We are open : </strong>
                  <br />
                  Monday-Thursday : 9:00 AM - 5:30 PM
                  <br />
                  Friday : 9:00 AM - 6:00 PM
                  <br /> Saturday : 11:00 AM - 05:00 PM{" "}
                </div>
              </div>
              <div className="pillCards">
                <div className="leftElements1">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div className="rightElements1">
                  <strong>E-mail: </strong>
                  <br />
                 shop@email.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSections;
