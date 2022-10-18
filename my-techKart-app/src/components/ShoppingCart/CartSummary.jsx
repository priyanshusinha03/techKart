import React from "react";
import "./ShoppingCart.css";
import paypalLogo from "../../assets/paypal.png";
const CartSummary = () => {
  return (
    <div>
      <h5>
        <b>Summary</b>
      </h5>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <span
                style={{ fontSize: "15px", color: "black", fontWeight: 550 }}
              >
                Estimate Shipping and Tax
                <br />
                <br />
                <spans style={{ fontSize: "14px" }}>
                  Enter your destination to get a shipping estimate.
                </spans>
              </span>{" "}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div>
                <br />
                <form action="">
                  <label htmlFor="" className="form-label">
                    <b>Country</b>
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Australia</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <br />
                  <label htmlFor="" className="form-label">
                    <b>State/Province</b>
                  </label>
                  <input type="text" className="form-control" />
                  <br />
                  <label htmlFor="" className="form-label">
                    <b> Zip/Postal Code</b>{" "}
                  </label>
                  <input type="text" className="form-control" />
                  <br />
                  <label htmlFor="">
                    <b style={{ fontSize: "13px" }}>Standard Rate</b>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      aria-checked
                    >
                      <small>
                        Price may vary depending on the item/destination. Shop
                        Staff will contact you. $21.00
                      </small>
                    </label>
                  </div>
                  <label htmlFor="" className="mt-2">
                    <b style={{ fontSize: "13px" }}>Pickup from store</b>
                  </label>
                  <div class="form-check mt-0">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      aria-checked
                    >
                      <small>1234 Street Adress City Address, 1234 $0.00</small>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <span
                style={{ fontSize: "15px", color: "black", fontWeight: 550 }}
              >
                Apply Discount Code{" "}
              </span>{" "}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <br />
              <form action="">
                <label htmlFor="" className="form-label">
                  <b>Enter Discount Code</b>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter discount Code"
                  className="form-control p-2"
                />
                <br />
                <button
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    border: "3px solid #0156FF",
                    fontSize: "14px",
                  }}
                  className="btn btn-outline-primary rounded-pill"
                >
                  <spans>Apply Discount</spans>
                </button>
              </form>
              <hr />

              <div className="d-flex justify-content-between py-2">
                <div>
                  <h6>Subtotal</h6>
                </div>
                <div>
                  <h6>$13,047.00</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div>
                  <h6>Shipping</h6>
                  <small style={{ fontSize: "10px" }}>
                    (Standard Rate - Price may vary depending on the
                    item/destination. TECS Staff will contact you.)
                  </small>
                </div>
                <div>
                  <h6>$21</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div>
                  <h6>Tax</h6>
                </div>
                <div>
                  <h6>$1.91</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div>
                  <h6>GST (10%)</h6>
                </div>
                <div>
                  <h6>$1.91</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div>
                  <h5 style={{ fontWeight: 600 }}>Order Total</h5>
                </div>
                <div>
                  <h5>
                    <h5 style={{ fontWeight: 600 }}>$13,068.00</h5>
                  </h5>
                </div>
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "12px 20px",

                  fontSize: "14px",
                }}
                className="btn mt-2 btn-primary rounded-pill"
              >
                <spans>Proceed to Checkout</spans>
              </button>
              <button
                style={{
                  width: "100%",
                  padding: "12px 20px",

                  fontSize: "14px",
                }}
                className="btn mt-4 btn-warning rounded-pill"
              >
                <spans> Checkout with  <img src={paypalLogo} alt="" width="80px" height="25px" /></spans>
              </button>
              <br />
              <button
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  border: "3px solid gray",
                  fontSize: "14px",
                }}
                className="btn btn-outline-secondary mt-4 rounded-pill"
              >
                <spans>
                  Checkout with Multiple Addresses{" "}
                 
                </spans>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
