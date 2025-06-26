import React from "react";
import bank_card from "../../../assests/images/creditcard/black-card.png";
import white_card from "../../../assests/images/creditcard/white-card.png";
import visa_icon from "../../../assests/images/creditcard/visa-icon.png";
import "../../../assests/css/creditcard.css";

const Banner = () => {
  return (
    <section className="creditcard-banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-hd-wrap text-center">
              <h1>CNX-Creditcard</h1>
              <p>Pay anywhere from the world with your CNX-Visa Card</p>
            </div>
            <div className="card-banner-wrap">
              <div className="creditcard-wrap">
                <img src={bank_card} alt="" className="img-fluid" />
                <h4>Oblivian Grey</h4>
                <p>Invest $100 USD in CNX and earn the CNX-Creditcard</p>
                <a href="" className="pick_btn credit-slide">
                  Pick
                </a>
              </div>
              <div className="creditcard-wrap">
                <img src={white_card} alt="" className="img-fluid" />
                <h4>Crème White</h4>
                <p>Invest $100 USD in CNX and earn the CNX-Creditcard</p>
                <a href="" className="pick_btn credit-slide">
                  Pick
                </a>
              </div>
            </div>
            <div className="offical-partner text-center">
              <img src={visa_icon} alt="" />
              <p>Official VISA Partner</p>
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
