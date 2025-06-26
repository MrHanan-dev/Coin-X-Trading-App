import React from "react";
import download from "../../../assests/images/vpn/download.svg";
import account from "../../../assests/images/vpn/account.svg";
import network from "../../../assests/images/vpn/network.svg";
const Join = () => {
  return (
    <section className="default-vpn-padd join-sec vpn-hd-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Join The Network
              </h2>
              <p>
                Whether you are on your phone or tablet — no matter where you
                are or what devices you are using — CNX-VPN has you connected
                and secure.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="join-content-wrap text-center aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={download} alt="" />
              <h5>
                Download CNX-VPN <br />
                for your device
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="join-content-wrap text-center aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={account} alt="" />
              <h5>
                Create your CNX-Account <br />
                and start browsing
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="join-content-wrap text-center aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={network} alt="" />
              <h5>
                Enjoy high speed private <br />
                internet network
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
