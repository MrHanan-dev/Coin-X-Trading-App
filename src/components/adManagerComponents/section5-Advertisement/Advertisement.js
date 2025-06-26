import React from "react";
import badge from "../../../assests/images/manager/badge.png";
// import "../../../assests/css";

const Advertisement = () => {
  return (
    <section className="manager-padd-default voucher-sec manager-hd-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Advertisement Voucher{" "}
              </h2>
              <p>
                When buying CNX you get a percentage of the purchased amount
                back in the form of an advertising voucher. The amount you
                receive is determined on the percentages below.
              </p>
            </div>
            <div className="voucher-content-outer">
              <img src={badge} alt="" className="aos-init" data-aos="fade-right" data-aos-delay="100" />
              <div className="voucher-content-inner aos-init" data-aos="fade-left" data-aos-delay="100">
                <h3>Presale bonus for early investors</h3>
                <div className="investment-wraper">
                  <div className="investment-info">
                    <h4>5%</h4>
                    <p>
                      Investment <br />
                      $1.000+
                    </p>
                  </div>
                  <div className="investment-info">
                    <h4>7%</h4>
                    <p>
                      Investment <br />
                      $5.000+
                    </p>
                  </div>
                  <div className="investment-info">
                    <h4>11%</h4>
                    <p>
                      Investment <br />
                      $10.000+
                    </p>
                  </div>
                  <div className="investment-info">
                    <h4>18%</h4>
                    <p>
                      Investment <br />
                      $100.000+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="voucher-btn">
              <a href="">Get Voucher</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
