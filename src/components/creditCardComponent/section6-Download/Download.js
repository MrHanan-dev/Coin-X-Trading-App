import React from "react";
import google from "../../../assests/images/creditcard/google-play.png";
import IOS from "../../../assests/images/creditcard/app-store.png";
const Download = () => {
  return (
    <section className="default-padd-creditcard download-wallet-app">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="down-app-wrap">
              <h2>
                <span></span> Download the WalletX App
              </h2>
              <p>
                Download the WalletX app today and take control of your money.
                View your card transactions, trade crypto and check your PIN,
                all in one app.
              </p>
              <div className="store-btns">
                <a href="">
                  <img src={google} alt="" />
                </a>
                <a href="">
                  <img src={IOS} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
