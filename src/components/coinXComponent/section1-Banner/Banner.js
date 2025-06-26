import React from "react";
import "../../../assests/css/coinx.css";

const Banner = () => {
  return (
    <section className="coinx_banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="coinx_banner-wraper">
              <div className="coinx_banner-content-wrap text-center">
                <h1>CoinX</h1>
                <p>The Future of Crypto</p>
                <div className="coinx-banner-btn">
                  <a href="" className="coinx-btn slide">
                    Pre-sale is live
                  </a>
                  <a href="" className="more-info">
                    More information {">"}
                  </a>
                </div>
              </div>
              <div className="coinx-video">
                <iframe
                  src=""
                  frameBorder="0"
                  height="495"
                  width="924"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
