import React from "react";
import monetise from "../../../assests/images/manager/monetise-circle-img.svg";
import monetise1 from "../../../assests/images/manager/monetise-shape-img.svg";
import monetise2 from "../../../assests/images/manager/monetise-icon-1.svg";
import monetise3 from "../../../assests/images/manager/monetise-icon-2.svg";
import monetise4 from "../../../assests/images/manager/monetise-icon-3.svg";
import "../../../assests/css/manager.css";

const Monetise = (props) => {
  return (
    <section className="monetise-sec manager-hd-wrap">
      <div className="monetise-shape">
        <img src={monetise} alt="" />
        <img src={monetise1} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Monetise Worldwide
              </h2>
              <p>We provide easy integrations for websites and applications.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="monetise-wrap aos-init" data-aos="fade-up" data-aos-delay="100">
              <img src={monetise2} alt="" />
              <h3>Earn money with your app or website</h3>
              <p>
                Millions of advertisers compete for your ad space. This means
                more money, more relevant ads, and more ad spaces filled.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="monetise-wrap aos-init" data-aos="fade-up" data-aos-delay="200">
              <img src={monetise3} alt="" />
              <h3>Ads optimised for mobile and website</h3>
              <p>
                Admanager can optimize the size of your ad units to
                automatically fit desktop or mobile, with easy integration.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="monetise-wrap aos-init" data-aos="fade-up" data-aos-delay="300">
              <img src={monetise4} alt="" />
              <h3>Save time and effort with easy integration</h3>
              <p>
                Add one piece of code to your site and ads will automatically
                show ads tailored to your site’s layout, saving you time making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetise;
