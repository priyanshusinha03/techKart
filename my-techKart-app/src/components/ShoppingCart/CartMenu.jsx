import React from "react";
import "./ShoppingCart.css";
import lap1 from "../../assets/cart1.png";
import lap2 from "../../assets/cart2.png";
const CartMenu = () => {
  return (
    <div>
      <div className="container mb-5">
        <small>Home . Login</small>
        <br />
        <br />
        <h2 className="mt-4" style={{ fontWeight: "700" }}>
          <strong>Shopping Cart</strong>
        </h2>
        <br />
        <div className="row">
          <div className="col-sm-8">
            <div className="basket">
              <div className="basket-labels">
                <ul>
                  <li className="item item-heading">Item</li>
                  <li className="price">Price</li>
                  <li className="quantity">Quantity</li>
                  <li className="subtotal">Subtotal</li>
                </ul>
              </div>
              <div className="basket-product my-2">
                <div className="item">
                  <div className="product-image">
                    <img
                      src={lap1}
                      alt="Placholder Image 2"
                      className="img-fluid"
                    />
                  </div>
                  <div className="product-details">
                    <h6>
                      MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                      32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and
                      Mouse 3 Years Warranty
                    </h6>
                  </div>
                </div>
                <div className="price">
                  <b>$ 4,349.00</b>
                </div>
                <div className="quantity">
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={1}
                    style={{ width: "70px" }}
                    className="form-control noBorderWidths"
                  />
                </div>
                <div className="subtotal">
                  <strong>$ 4,359.00</strong>
                </div>
                <div className="remove">
                  <i class="fa-regular fa-circle-xmark"></i>
                  <br />
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div>

              <div className="basket-product my-2">
                <div className="item">
                  <div className="product-image">
                    <img
                      src={lap2}
                      alt="Placholder Image 2"
                      className="img-fluid"
                      style={{ marginTop: "-24%" }}
                    />
                  </div>
                  <div className="product-details">
                    <h6>
                      MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                      32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and
                      Mouse 3 Years Warranty
                    </h6>
                  </div>
                </div>
                <div className="price">
                  <b>$ 2,099.00</b>
                </div>
                <div className="quantity">
                  <input
                    type="number"
                    min="1"
                    max="9"
                    style={{ width: "70px" }}
                    value={1}
                    className="form-control noBorderWidths"
                  />
                </div>
                <div className="subtotal">
                  <strong>$ 2,099.00</strong>
                </div>
                <div className="remove">
                  <i class="fa-regular fa-circle-xmark"></i>
                  <br />
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div>
              <small>
                <span className="text-light"> s</span>
                <div className=" d-flex justify-content-between">
                  <div>
                    <span>
                      {" "}
                      <span>
                        <button
                          style={{ padding: "10px 35px", fontSize: "14px" }}
                          className="mx-3 btn btn-dark rounded-pill"
                        >
                          Clear Shopping Cart
                        </button>
                      </span>
                    </span>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <button
                        style={{ padding: "10px 35px", fontSize: "14px" }}
                        className="mx-3 btn btn-warning rounded-pill"
                      >
                        Update Shopping Cart
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </small>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="summaryBox"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartMenu;
