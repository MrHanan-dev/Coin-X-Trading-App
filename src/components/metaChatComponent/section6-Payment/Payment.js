import React from "react";
import create_acc from "../../../assests/images/metachat/create-account.svg";
import install_metaChat from "../../../assests/images/metachat/install-metachat.svg";
import dollar from "../../../assests/images/metachat/dollar-icon.svg";
import pay from "../../../assests/images/metachat/cnx-pay.svg";
const Payment = () => {
  return (
    <section className="cnx-payment-integration mc_sec">
      <div className="container">
        <div className="cnx-head">
          <h2>CNX-Payment Integration</h2>
          <p>The paid channels of MetaChat are using CNX-Payments.</p>
        </div>
        <div className="cnx-payment-process">
          <div
            className="process-payment aos-init"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={create_acc} alt="" />
            <h3>Create Account</h3>
            <p>
              CNX-Connect is the doorway to pay with your account in the
              CNX-Network.
            </p>
          </div>
          <div
            className="process-payment aos-init"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={install_metaChat} alt="" />
            <h3>Install MetaChat</h3>
            <p>
              By downloading the MetaChat application you can create a paid
              channel for your network.
            </p>
          </div>
          <div
            className="process-payment aos-init"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={dollar} alt="" />
            <h3>Paid Channel</h3>
            <p>
              Create a paid channel where your network can take part in it and
              earn money.
            </p>
          </div>
          <div
            className="process-payment aos-init"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={pay} alt="" />
            <h3>CNX-Pay</h3>
            <p>
              Earn your revenue in CNX. Your CNX will be transferred directly
              into WalletX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
