import React from "react";
import Banner_1 from "../../../assests/images/blockware/banner-img.png";
import "../../../assests/css/blockware.css";
const Banner = () => {
  return (
    <section className="blckware_banner-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blckware_banner-wraper text-center">
              <div className="blckware_banner-content-wrap text-center">
                <h1>BLockware</h1>
                <p>Information about our Blockchain {"&"} Nodes</p>
                <div className="blockware-banner-anchor">
                  <a href="" className="btn_1 slide">
                    Apply for Node
                  </a>
                  <a href="" className="more-info">
                    More information {">"}
                  </a>
                </div>
              </div>
              <img
                src={Banner_1}
                alt=""
                className="img-fluid blckware_banner-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
