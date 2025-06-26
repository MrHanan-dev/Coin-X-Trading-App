import React from "react";
import crypto from "../../../assests/images/creditcard/crypto-mobiles.png";
function Convert() {
  return (
    <section className="default-padd-creditcard convert-crypto-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="crypto-mbl-img">
              <img src={crypto} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="crypto-text-wrap">
              <h2>Convert Crypto to Creditcard Easily on WalletX</h2>
              <p>
                Whether you are on your phone or tablet—no matter where you are
                or what devices you’re using, CNX-VPN has you connected and
                secure.
              </p>
              <a href="" className="get_card_btn credit-slide">
                Get your card now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Convert;
