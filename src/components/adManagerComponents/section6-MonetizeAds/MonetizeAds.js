import React from "react";
import way1 from "../../../assests/images/manager/way-shape-1.svg";
import way2 from "../../../assests/images/manager/way-shape-2.svg";
import mobile1 from "../../../assests/images/manager/mobile-icon-1.svg";
import mobile2 from "../../../assests/images/manager/mobile-icon-2.svg";
import mobile3 from "../../../assests/images/manager/mobile-icon-3.svg";
import mobile4 from "../../../assests/images/manager/mobile-icon-4.svg";

const MonetizeAds = () => {
  return (
    <section className="manager-padd-default ways-sec manager-hd-wrap">
      <div className="way-shape">
        <img src={way1} alt="" />
        <img src={way2} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Multiple ways to Monetize{" "}
              </h2>
              <p>
                Monetize ads on your application or website in multiple ways.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="way-content aos-init" data-aos="fade-up" data-aos-delay="100">
              <img src={mobile1} alt="" />
              <h3>Rewarded Ads</h3>
              <p>Increase sales with video rewarded ads on your app.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="way-content aos-init" data-aos="fade-up" data-aos-delay="200">
              <img src={mobile2} alt="" />
              <h3>Interstitial Ads</h3>
              <p>Start advertising with interstitial ads on your website.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="way-content aos-init" data-aos="fade-up" data-aos-delay="300">
              <img src={mobile3} alt="" />
              <h3>Banner Ads</h3>
              <p>Boost your online traffic with banner ads.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="way-content aos-init" data-aos="fade-up" data-aos-delay="400">
              <img src={mobile4} alt="" />
              <h3>Offerwall Ads</h3>
              <p>Earn money with adding offerwall Ads to your game site.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="monetize-btn-wrap">
              <a href="">Start Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizeAds;
