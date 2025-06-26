import React from "react";
import data_shape from "../../../assests/images/cnx-connect/data-shape.svg";
import tick from "../../../assests/images/cnx-connect/tick-icon.svg";
const Backup = () => {
  return (
    <section className="default-cnx-padd data-sec cnx-hd-wraper">
      <div className="data-shape">
        <img src={data_shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Backup Your Data{" "}
              </h2>
              <p>
                Prevent account lockouts when you lose your phone. We encrypt
                your data so only you will know.
              </p>
            </div>
            <div className="data-content-wrap">
              <div
                className="data-content aos-init"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <span>1</span>
                <h4>Enable Backup</h4>
                <p>Encrypt your CNX data and store it secure in the cloud.</p>
              </div>
              <div
                className="data-content aos-init"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <span>2</span>
                <h4>Set Password</h4>
                <p>
                  Remember your password. For security we never receive the
                  password, therefore we can’t recover if forgotten.
                </p>
              </div>
              <div
                className="data-content aos-init"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <span>3</span>
                <h4>No lockouts</h4>
                <p>
                  With CNX-Connect, if you lose your account, you can recover it
                  using a given security sequence.
                </p>
              </div>
              <div
                className="data-content aos-init"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <img src={tick} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backup;
