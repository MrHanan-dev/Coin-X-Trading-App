import React from "react";
import double_card from "../../../assests/images/creditcard/double-cards.png";
const Access = () => {
  return (
    <section className="default-padd-creditcard access-worldwide">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="worldwide-hd">
              <h1>Instantly access your CNX Balance at ATMs worldwide</h1>
              <a href="" className="get_card_btn credit-slide">
                Get your card now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="worldwide-card-img">
              <img src={double_card} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
