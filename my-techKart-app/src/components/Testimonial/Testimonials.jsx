import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-sm-12">
            <div className="cardsInnerWrapper">
              <div className="cardsTestimonial">
                <h6 className="cards-section">
                  <span className="quoteIcon">
                    {" "}
                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                  </span>
                  <span className="para-sections">
                    {" "}
                    My first order arrived today in perfect condition. From the
                    time I sent a question about the item to making the
                    purchase, to the shipping and now the delivery, your
                    company, Tecs, has stayed in touch. Such great service. I
                    look forward to shopping on your site in the future and
                    would highly recommend it.
                  </span>
                </h6>
                <h6
                  className="mt-3"
                  style={{
                    float: "right",
                    fontWeight: "600",
                    marginRight: "30px",
                  }}
                >
                  - Tama Brown
                </h6>
                <br />
                <br />
                <div className="d-flex justify-content-between">
                  <div>
                    <button
                      className="btn btn-primary rounded-pill"
                      style={{ fontSize: "12px", padding: "12px 20px" }}
                    >
                      Leave Us A Review
                    </button>
                  </div>
                  <div style={{ marginRight: "26px" }}>
                    <i class="fa-solid fa-circle circleFour text-primary"></i>
                    <i class="fa-regular fa-circle circleFour"></i>
                    <i class="fa-regular fa-circle circleFour"></i>
                    <i class="fa-regular fa-circle circleFour"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Testimonials;
