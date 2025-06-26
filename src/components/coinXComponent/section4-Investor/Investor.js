import React from "react";
import forward_arrow from "../../../assests/images/coinx/forward-arrow.png";
const Investor = () => {
  return (
    <section className="investor-program-sec">
      <div className="container">
        <div className="investors-inner coinx-head">
          <h2>CNX-Investor Program</h2>
          <p>
            We invest in our community. If you come up with a great business
            plan that support the CNX-Vision, and we might cooperate with you.
          </p>
        </div>
        <div className="investors-plans">
          <div className="plan" data-aos="fade-up" data-aos-delay="100">
            <h3>Create</h3>
            <span>Your Plan</span>
          </div>
          <img
            src={forward_arrow}
            alt=""
            className="img-fluid"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div className="plan" data-aos="fade-up" data-aos-delay="300">
            <h3>Send us</h3>
            <span>Your Plan</span>
          </div>
          <img
            src={forward_arrow}
            alt=""
            className="img-fluid"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <div className="plan" data-aos="fade-up" data-aos-delay="500">
            <h3>We Look</h3>
            <span>at investment</span>
            <h3>options</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investor;
