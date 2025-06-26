import React from "react";
import shape from "../../../assests/images/vpn/shape-2-right.svg";
const Free = () => {
  return (
    <section className="default-vpn-padd invest-sec vpn-hd-wrap">
      <div className="invest-shape">
        <img src={shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Free for Lifetime for Investors
              </h2>
              <p>
                During the pre-sale we give users the opportunity to get the VPN
                application free for lifetime.
              </p>
            </div>
            <div className="invest-box-wrap">
              <div
                className="invest-box-inner aos-init"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4>FOR INVESTORS</h4>
                <p>Free for investors who have invested 100$ for lifetime</p>
              </div>
              <div
                className="invest-box-inner aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4>FOR NON INVESTORS</h4>
                <p>Get VPN in just 9.99$ a month or 1.248 CNX a month</p>
              </div>
            </div>
            <div className="btn-wraper">
              <a href="" className="btn_1 slide">
                Buy CNX Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free;
