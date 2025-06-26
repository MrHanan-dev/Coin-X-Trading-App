import React from "react";
import cnx_silver from "../../../assests/images/coinx/cnx-silver.png";
import gold_img from "../../../assests/images/coinx/gold-img.png";
import bronze_img from "../../../assests/images/coinx/bronze-img.png";
const Investment = () => {
  return (
    <section className="cnx-investment-reward">
      <div className="container">
        <div className="investment-reward coinx-head">
          <h2>CNX-Investment Rewards</h2>
          <p>
            For investors during the pre-sale, we offer real Gold, Silver and
            Bronze coins.
          </p>
        </div>
        <div className="investment-editions">
          <div className="edition" data-aos="fade-right" data-aos-delay="100">
            <div className="edition-content">
              <p className="limited-text">Limited Edition</p>
              <img src={cnx_silver} alt="" className="img-fluid" />
              <h3>
                CNX-Silver <br /> Coin
              </h3>
              <span className="category-color"></span>
              <p className="">Included engraved NFT with Certificate</p>
            </div>
            <p className="available-stock">Only 1.000 available</p>
          </div>
          <div className="edition" data-aos="fade-up" data-aos-delay="200">
            <div className="edition-content">
              <p className="limited-text">Limited Edition</p>
              <img src={gold_img} alt="" className="img-fluid" />
              <h3>
                CNX 24K Golden <br />
                Coin
              </h3>
              <span className="category-color gold-color"></span>
              <p className="">Included engraved NFT with Certificate</p>
            </div>
            <p className="available-stock">Only 100 available</p>
          </div>
          <div className="edition" data-aos="fade-left" data-aos-delay="300">
            <div className="edition-content">
              <p className="limited-text">Limited Edition</p>
              <img src={bronze_img} alt="" className="img-fluid" />
              <h3>
                CNX-Bronze <br />
                Coin
              </h3>
              <span className="category-color bronze-color"></span>
              <p className="">Included engraved NFT with Certificate</p>
            </div>
            <p className="available-stock">Only 1.000 available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
