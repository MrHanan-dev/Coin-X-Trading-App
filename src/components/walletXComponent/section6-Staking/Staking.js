import React from "react";
import reward_shape from "../../../assests/images/walletx/reward-shape.svg";
import reward from "../../../assests/images/walletx/reward-img.svg";
const Staking = () => {
  return (
    <section className="default-padd-walletx reward-sec">
      <div className="reward-shape">
        <img src={reward_shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Staking Reward
              </h2>
              <p>
                During the presale we are giving away staking rewards for early
                investors.
              </p>
            </div>
            <div className="reward-warper">
              <img
                src={reward}
                alt=""
                className="reward-img aos-init"
                data-aos="fade-right"
                data-aos-delay="100"
              />
              <div
                className="reward-warper-inner aos-init"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Presale bonus for early investors</h3>
                <div className="reward-warper-outer">
                  <div className="reward-warper-info">
                    <h4>14%</h4>
                    <p>
                      Investment <br />
                      $50.000+
                    </p>
                  </div>
                  <div className="reward-warper-info">
                    <h4>9%</h4>
                    <p>
                      Investment <br />
                      $10.000+
                    </p>
                  </div>
                  <div className="reward-warper-info">
                    <h4>6%</h4>
                    <p>
                      Investment <br />
                      $5.000+
                    </p>
                  </div>
                  <div className="reward-warper-info">
                    <h4>2%</h4>
                    <p>
                      Investment <br />
                      $1.000+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reward-btn-wrap">
              <a href="" className="btn_1 slide">
                Start Investing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
