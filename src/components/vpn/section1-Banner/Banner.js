import React from "react";
import banner from "../../../assests/images/vpn/banner-mockup.png";
import "../../../assests/css/vpn.css";
const Banner = () => {
  return (
    <section className="banner-sec vpn-banner-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-wraper">
              <div className="banner-content-wrap text-center">
                <h1>VPN</h1>
                <p>Browse anonymously though CNX-Servers</p>
                <a href="" className="btn_1 slide">
                  Download Now
                </a>
              </div>
              <img
                src={banner}
                alt=""
                className="img-fluid vpn-banner-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
