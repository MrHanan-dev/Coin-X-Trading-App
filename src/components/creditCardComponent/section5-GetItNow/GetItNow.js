import React from "react";
import gold from "../../../assests/images/creditcard/gold-globe.png";
const GetItNow = () => {
  return (
    <section className="default-padd-creditcard credit-globe">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="globe-content">
              <p>Get it now:</p>
              <h2>Spend your Money Globally With Great Exchange Rates</h2>
              <a href="" className="get_card_now_btn">
                Get your card now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="globe-img">
              <img src={gold} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetItNow;
