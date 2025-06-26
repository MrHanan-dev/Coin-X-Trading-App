import React from "react";
import step_1 from "../../../assests/images/coinx/step-1.svg";
import step_2 from "../../../assests/images/coinx/step-2.svg";
import step_3 from "../../../assests/images/coinx/step-3.svg";
const Pay = () => {
  return (
    <section className="cnx-pay">
      <div className="container">
        <div className="cnx-head coinx-head">
          <h2>CNX-Pay</h2>
          <p>
            CNX-Network implants CNX-Pay for companies and softwares in our
            network.{" "}
          </p>
        </div>
        <div className="cnx-pay-process">
          <div className="cnx-pay-step" data-aos="fade-up" data-aos-delay="100">
            <img src={step_1} alt="" className="img-fluid" />
            <h3>Create Your WalletX Account</h3>
            <p>The first step is to create an account on WalletX.</p>
          </div>
          <div className="cnx-pay-step" data-aos="fade-up" data-aos-delay="200">
            <img src={step_2} alt="" className="img-fluid" />
            <h3>Store CNX-Coins in your Wallet</h3>
            <p>After creating an account you have to buy CNX.</p>
          </div>
          <div className="cnx-pay-step" data-aos="fade-up" data-aos-delay="300">
            <img src={step_3} alt="" className="img-fluid" />
            <h3>Pay in our Network</h3>
            <p>Now, you can spend CNX-Coins in our Network.</p>
          </div>
        </div>
        <div className="buy-cnx-btn" data-aos="fade-up" data-aos-delay="400">
          <a href="">Buy CNX</a>
        </div>
      </div>
    </section>
  );
};

export default Pay;
