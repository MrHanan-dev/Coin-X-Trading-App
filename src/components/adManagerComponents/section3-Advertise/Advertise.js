import React from "react";
import range from "../../../assests/images/manager/range-img.svg";
// import "../../../assests/css";

const Advertise = () => {
  return (
    <section className="manager-padd-default global-sec manager-hd-wrap">
      <div className="range-shape">
        <img src={range} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Advertise On Global Range
              </h2>
              <p>Use advertisements to reach your audience, worldwide.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="global-wrap">
              <div className="global-content aos-init" data-aos="fade-up" data-aos-delay="100">
                <h3>Simple</h3>
                <p>
                  Be seen by customers at the very moment they are looking for
                  relevant subjects on multiple search engines. If you are an
                  early investor in CoinX, you will receive an amount of
                  advertisement money for free.
                </p>
              </div>
              <div className="global-content aos-init" data-aos="fade-up" data-aos-delay="200">
                <h3>Reliable</h3>
                <p>
                  We are using the newest techniques to optimise ads in our
                  network. Currently our developers are looking into ways to
                  integrate our ads easily in simple Wordpress websites.
                </p>
              </div>
              <div className="global-content aos-init" data-aos="fade-up" data-aos-delay="300">
                <h3>Quality</h3>
                <p>
                  Publish your ads worldwide. Using our system, the acceptance
                  of the ad will be fast so people can see your ad sooner then
                  expected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
