import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="container">
        <br />
        <small>
          Home{" "}
          <i
            class="fa-solid fa-chevron-left text-primary"
            style={{ fontSize: "10px" }}
          ></i>{" "}
          Login
        </small>
      </div>
      <br />
      <div className="container">
        <h3 style={{ fontWeight: "600" }}>Customer Login</h3>
      </div>
      <div className="container">
        <div className="containerWrapper">
          <div className="row">
            <div className="col-sm-6">
              <div className="">
                <div className="cardSectionForm p-5">
                  <div className="container">
                    <h6 style={{ fontWeight: "600" }}>Registered Customers</h6>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      If you have an account, sign in with your email address
                    </p>
                    <form>
                      <label
                        htmlFor="
                        "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                      <br />{" "}
                      <label
                        htmlFor="
                        "
                      >
                        Password
                      </label>I
                      <input
                        type="text"
                        placeholder="Password"
                        className="form-control"
                      />
                      <div className="d-flex justify-content-between my-4">
                        <div>
                          <button
                            className="btn btn-primary rounded-pill"
                            style={{ padding: "10px 25px", fontSize: "12px" }}
                          >
                            Sign in
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-transparent text-primary rounded-pill "
                            style={{ padding: "11px 15px", fontSize: "12px" }}
                          >
                            Forgot Your Password ?
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cardSectionForm p-5">
                <div className="container">
                  <h6 style={{ fontWeight: "600" }}>New Customer!</h6>
                  <p style={{ fontSize: "14px", color: "gray" }}>
                    Creating an account has many benefits{" "}
                  </p>
                  <ul className="fontsData" style={{ marginLeft: "-20px" }}>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track Orders and more</li>
                  </ul>
                  <button
                    className="btn btn-primary rounded-pill "
                    style={{ padding: "10px 19px", fontSize: "12px" }}
                  >
                    Create An Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Register;
