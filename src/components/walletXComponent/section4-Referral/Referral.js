import React from "react";
import invite from "../../../assests/images/walletx/invite-shape.svg";
const Referral = () => {
  return (
    <section className="default-padd-walletx invite-sec">
      <div className="invite-shape">
        <img src={invite} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="hd-wraper">
              <h2>
                <span></span> Referral Bonus With Each Invite
              </h2>
              <p>You get rewarded for helping to grow the community.</p>
            </div>
            <div className="invite-wraper">
              <div className="invite-inner aos-init" data-aos="fade-right"
                   data-aos-delay="100">
                <div className="invite-price">
                  <h3>$25</h3>
                  <p>USD</p>
                </div>
                <div className="invite-content">
                  <h4>Referral Bonus</h4>
                  <p>
                    When you have a referral who has deposit 100 USD, you will
                    receive a $25 USD referral bonus.
                  </p>
                </div>
              </div>
              <div className="invite-inner aos-init" data-aos="fade-right"
                   data-aos-delay="200">
                <div className="invite-price">
                  <h3>6%</h3>
                  <p>CNX</p>
                </div>
                <div className="invite-content">
                  <h4>Presale Referral Bonus</h4>
                  <p>
                    During the presale CNX offers you 6% of the amount your
                    Referral bought extra on your WalletX account.
                  </p>
                </div>
              </div>
              <div className="invite-inner aos-init" data-aos="fade-right"
                   data-aos-delay="300">
                <div className="invite-price">
                  <h3>$0.25</h3>
                  <p>USD</p>
                </div>
                <div className="invite-content">
                  <h4>Low Transaction Fees</h4>
                  <p>
                    For every transaction we charge a fee of 0.25 USD per
                    transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
