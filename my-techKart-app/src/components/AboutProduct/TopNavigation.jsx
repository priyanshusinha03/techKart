import React from "react";
import "./AboutProducts.css";
import LogoImg from "../../assets/paypal.png";
const TopNavigation = () => {
  return (
    <div>
      <div>
        <nav
          style={{ borderBottom: "1px solid #edece8" }}
          class="navbar navbar-expand-lg navbar-light p-2 bg-light d-none d-sm-block"
        >
          <div class="container">
            <div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link addNewActive addNew"
                    aria-current="page"
                    href="#"
                  >
                    About Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link addNew" href="#">
                    Details
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link addNew" aria-current="page" href="#">
                    Specs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="navbar-nav ms-auto">
                <li className="nav-item mt-1">
                  <as className="nav-link">
                    <span>
                      <input
                        type="number"
                        min="1"
                        max="9"
                        value={1}
                        className="form-control noBorderWidth"
                      />
                      <span style={{ float: "right" }} className="mt-1 p-2">
                        On Sale from $3,299.00
                      </span>
                    </span>
                  </as>
                </li>
                <li class="nav-item ">
                  <a class="nav-link addNew" href="#">
                    <button
                      className="btn btn-primary rounded-pill"
                      style={{ padding: "12px 23px", fontSize: "14px" }}
                    >
                      Add To Cart
                    </button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button
                      className="btn btn-warning rounded-pill"
                      style={{ padding: "10px 26px" }}
                    >
                      <img
                        src={LogoImg}
                        alt=""
                        width="95px"
                        height="25px"
                        className="img-responsive"
                      />
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopNavigation;
