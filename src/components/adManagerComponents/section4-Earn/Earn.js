import React from "react";
import globe from "../../../assests/images/manager/globe.svg";
import graph from "../../../assests/images/manager/graph.svg";

// import "../../../assests/css";

const Earn = () => {
  return (
    <section className="manager-padd-default platform-sec manager-hd-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Earn Money With Your Platform{" "}
              </h2>
              <p>
                Start earning money with your business. We offer high eCPM rates
                and opportunities to implement third parties SDKs.
              </p>
            </div>
            <div className="platform-content-wraper">
              <div className="platform-content aos-init" data-aos="fade-up" data-aos-delay="100">
                <h2>High</h2>
                <p>eCPMs</p>
              </div>
              <div className="platform-content aos-init" data-aos="fade-up" data-aos-delay="200">
                <h2>$0.30</h2>
                <p>ARPDAU</p>
              </div>
              <div className="platform-content aos-init" data-aos="fade-up" data-aos-delay="300">
                <h2>$75K</h2>
                <p>Monthly revenue /100k DAU</p>
              </div>
              <div className="platform-content aos-init" data-aos="fade-up" data-aos-delay="400">
                <h2>Start</h2>
                <p>MONETIZING</p>
              </div>
            </div>
            <div className="platform-info">
              <div className="info-inner aos-init" data-aos="fade-right" data-aos-delay="500">
                <img src={globe} alt="" />
                <p>Global monetization in 50+ countries</p>
              </div>
              <div className="info-inner aos-init" data-aos="fade-right" data-aos-delay="600">
                <img src={graph} alt="" />
                <p>See audience data of your users live in your account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn;
