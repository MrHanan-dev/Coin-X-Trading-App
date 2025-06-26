import React from "react";
import "../../../assests/css/metachat.css";
import banner_ellipse from "../../../assests/images/metachat/banner-ellipse.svg";
import banner_metaChat from "../../../assests/images/metachat/metachat-banner-img.png";
const Banner = () => {
  return (
    <section className="mc_banner-sec">
      <div className="mc_banner-shape">
        <img src={banner_ellipse} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mc_banner-wraper">
              <div className="banner-content-wrap mc_banner-content-wrap text-center">
                <h1>Metachat</h1>
                <p>Encrypted chat service for daily purposes</p>
                <a href="" className="btn_1 slide">
                  Download Now
                </a>
                <a href="" className="">
                  More information {">"}
                </a>
              </div>
              <img
                src={banner_metaChat}
                alt=""
                className="img-fluid mc_banner-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
