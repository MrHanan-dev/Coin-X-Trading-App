import React from "react";

const Reliable = () => {
  return (
    <section className="default-padd-walletx secure-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Secure {"&"} Reliable{" "}
              </h2>
              <p>
                Make easy, secure and private CNX transactions which are stored
                safely inside the blockchain through the WalletX application.
              </p>
            </div>
            <div className="secure-wrap">
              <div className="secure-inner aos-init" data-aos="fade-up"
                   data-aos-delay="100">
                <h3>Blockchain</h3>
                <div className="graph-line"></div>
              </div>
              <div className="secure-inner aos-init" data-aos="fade-up"
                   data-aos-delay="200">
                <h3>Peer-To-Peer</h3>
                <div className="graph-line"></div>
              </div>
              <div className="secure-inner aos-init" data-aos="fade-up"
                   data-aos-delay="300">
                <h3>CNX-Network</h3>
                <div className="graph-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reliable;
