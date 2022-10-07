import React from "react";
import "./Headers.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-Dark text-light">
        <div className="container">
          <div className="d-flex justify-content-around newDark">
            <div>
              Mon-Thu:{" "}
              <strong>
                9:30 AM to 6:30 PM <i class="bi bi-caret-down"></i>
              </strong>
            </div>
            <div>
              Visit our showroom in 1234 Street Address City Address, 1234{" "}
              <strong>
                <u style={{ color: "white" }}>Contact Us</u>
              </strong>
            </div>
            <div className="text-light">
              Call US:(0,0) 1234 5678{" "}
              <span className="px-2">
                <i class="bi bi-facebook"></i>
                <i style={{ paddingLeft: "7px" }} class="bi bi-instagram"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
