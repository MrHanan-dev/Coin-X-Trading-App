import React from "react";
import cnx_card from "../../../assests/images/creditcard/cnx-card-img.png";
const CNXCard = () => {
  return (
    <section className="default-padd-creditcard cnx-card-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="cnx-card-content">
              <h2>
                <span></span> Your VISA <sup>&#174;</sup> CNX-Card{" "}
              </h2>
              <p>
                Whether you are on your phone or tablet—no matter where you are
                or what devices you’re using, CNX-VPN has you connected and
                secure.
              </p>

              <p>
                Whether you are on your phone or tablet—no matter where you are
                or what devices you’re using, CNX-VPN has you connected and
                secure.
              </p>
              <a href="" className="get_card_now_btn">
                Get your card now
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="cnx-card-img">
              <img src={cnx_card} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNXCard;
