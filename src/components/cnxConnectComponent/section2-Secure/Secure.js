import React from "react";
import sheild_shape from "../../../assests/images/cnx-connect/shield-shape.svg";
import secure_icon from "../../../assests/images/cnx-connect/secure-icon.svg";
import backup_icon from "../../../assests/images/cnx-connect/backup-icon.svg";
import setup_icon from "../../../assests/images/cnx-connect/setup-icon.svg";
const Secure = () => {
  return (
    <section className="default-cnx-padd shield-sec cnx-hd-wraper">
      <div className="shield-shape">
        <img src={sheild_shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> Secure and Shield Your Utilities
              </h2>
              <p>
                CNX-connect’s primary purpose is to ensure your privacy,
                security, and actions within the network.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="shield-wraper aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={setup_icon} alt="" />
              <h3>Setup</h3>
              <p>Easy to setup Your CNX-Account for the network.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="shield-wraper aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={secure_icon} alt="" />
              <h3>Secure</h3>
              <p>TouchID, Encrypted Backups and more to keep you secure.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="shield-wraper aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={backup_icon} alt="" />
              <h3>Backup</h3>
              <p>Prevent account lockout when you lose your phone.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="shield-wraper aos-init"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={setup_icon} alt="" />
              <h3>Connect</h3>
              <p>All your CNX-Apps connected in this authenticator app.</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="btn-wraper">
              <a href="" className="btn_1 slide">
                Sign up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secure;
