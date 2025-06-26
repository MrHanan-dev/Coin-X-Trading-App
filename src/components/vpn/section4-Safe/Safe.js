import React from "react";
import shapeRight from "../../../assests/images/vpn/shape-right.svg";
import separator from "../../../assests/images/vpn/separator-line.svg";
import shield from "../../../assests//images/vpn/shield.svg";
import separator1 from "../../../assests/images/vpn/separator-line.svg";
import secure from "../../../assests/images/vpn/secure-globe.svg";
import separator_line from "../../../assests/images/vpn/separator-line.svg";
import secure_money from "../../../assests/images/vpn/secure-money.svg";
import globe_white from "../../../assests//images/vpn/globe-white.svg";
const Safe = () => {
  return (
    <section className="default-vpn-padd secure-safe-sec vpn-hd-wrap">
      <div className="secure-shape">
        <img src={shapeRight} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Safe, Secure, and Affordable
              </h2>
              <p>We are the first and only decentralized VPN of its kind.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="secure-content-wrap aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={separator} alt="" className="line-img" />
              <img src={shield} alt="" />
              <h4>Secure access. Worldwide.</h4>
              <p>
                Connect from anywhere around the world, just with one click.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="secure-content-wrap aos-init"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <img src={separator1} alt="" className="line-img" />
              <img src={secure} alt="" />
              <h4>Surf the internet without being tracked</h4>
              <p>Encrypt your internet activity for safe browsing.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="secure-content-wrap aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={separator_line} alt="" className="line-img" />
              <img src={secure_money} alt="" />
              <h4>Pay as you go with no unwanted cost</h4>
              <p>No hidden costs while you are using the VPN</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="secure-content-wrap aos-init"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <img src={globe_white} alt="" />
              <h4>We are a global VPN community</h4>
              <p>Connect through the best VPN Network on the internet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safe;
