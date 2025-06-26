import React from "react";
import asserts from "../../../assests/images/walletx/assets-img.png";
const Assets = () => {
  return (
    <section className="default-padd-walletx assets-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hd-wraper">
              <h2>
                <span></span> Send Assets To Anyone Everywhere
              </h2>
              <p>
                WalletX offers the opportunity for its users to send assets
                easily to an other wallet in the CoinX application.
              </p>
            </div>
            <div className="left-assets-wrap">
              <div className="fast-wrap aos-init" data-aos="fade-right"
                   data-aos-delay="100">
                <div className="time-wrap">
                  <h3>45</h3>
                  <p>Minutes</p>
                </div>
                <div className="time-info">
                  <h4>
                    <span></span> Fast Transactions
                  </h4>
                  <p>
                    Transactions are delivered within 45 minutes from A to B.
                  </p>
                </div>
              </div>
              <div className="low-wrap aos-init" data-aos="fade-right"
                   data-aos-delay="200">
                <div className="time-wrap">
                  <p>up-to</p>
                  <h3>0.25</h3>
                  <p>Costs</p>
                </div>
                <div className="time-info">
                  <h4>
                    <span></span> Low Transaction Fees
                  </h4>
                  <p>
                    For every transaction WalletX charges a fee up to 0.25 USD
                    per transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="assets-img" data-aos="fade-left"
                 data-aos-delay="100">
              <img src={asserts} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assets;
