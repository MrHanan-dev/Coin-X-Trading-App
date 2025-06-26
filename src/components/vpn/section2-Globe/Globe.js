import React from "react";
import map from "../../../assests/images/vpn/map.svg";
import location from "../../../assests/images/vpn/location.svg";
import globe from "../../../assests/images/vpn/globe.svg";
import cloud from "../../../assests/images/vpn/cloud.svg";
const Globe = () => {
  return (
    <section className="default-vpn-padd server-sec vpn-hd-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Servers All Around The Globe
              </h2>
              <p>For an optimal user experience worldwide.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="map-img-wrap">
              <img src={map} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="server-info-outer">
              <div
                className="world-wide-wrap aos-init"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="server-info">
                  <h3>189</h3>
                  <p>Locations</p>
                </div>
                <img src={location} alt="" />
              </div>
              <div
                className="world-wide-wrap aos-init"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="server-info">
                  <h3>89</h3>
                  <p>Countries</p>
                </div>
                <img src={globe} alt="" />
              </div>
              <div
                className="world-wide-wrap aos-init"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="server-info">
                  <h3>10</h3>
                  <p>Servers</p>
                </div>
                <img src={cloud} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Globe;
