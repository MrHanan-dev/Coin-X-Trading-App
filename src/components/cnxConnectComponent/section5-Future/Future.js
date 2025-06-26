import React from "react";
import future_shape from "../../../assests/images/cnx-connect/future-shape.svg";
const Future = () => {
  return (
    <section className="default-cnx-padd feature-sec cnx-hd-wraper">
      <div className="future-shape">
        <img src={future_shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Ready For The Future{" "}
              </h2>
              <p>
                Once you have setup your account in the CNX-Connect app, you
                will never have to create an account again.
              </p>
            </div>
            <div className="future-wrap">
              <div
                className="future-content aos-init"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2>
                  <span>Easy</span> <br /> Setup
                </h2>
              </div>
              <div
                className="future-content aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4>LATEST SOFTWARE</h4>
                <h2>SECURITY</h2>
              </div>
              <div
                className="future-content aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>FLAWLESS</h2>
                <h4>PERFORMANCE</h4>
              </div>
              <div
                className="future-content aos-init"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4>READY FOR</h4>
                <h2>GROWTH</h2>
              </div>
            </div>
            <div className="feature-btn-wrap">
              <a href="" className="btn_1 slide">
                Buy CNX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
