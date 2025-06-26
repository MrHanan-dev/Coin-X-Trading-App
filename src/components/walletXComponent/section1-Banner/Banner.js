import React from "react";
import banner_1 from "../../../assests/images/walletx/banner-mockup.png";
import "../../../assests/css/walletx.css";
const Banner = () => {
  return (
    <section className="banner-sec walletx-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-wraper">
              <div className="banner-content-wrap text-center">
                <h1>WalletX</h1>
                <p>Trade the future</p>
                <a href="" className="btn_1 slide">
                  Download Now
                </a>
                <a href="" className="">
                  More information {">"}
                </a>
              </div>
              <img
                src={banner_1}
                alt=""
                className="img-fluid cnx-banner-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
