import React from "react";
import system_shape from "../../../assests/images/cnx-connect/system-shape.svg";
const Security = () => {
  return (
    <section className="default-cnx-padd security-sec cnx-hd-wraper">
      <div className="security-shape">
        <img src={system_shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper">
              <h2>
                <span></span> High Security System{" "}
              </h2>
              <p>
                To view your potential earnings, select a category for your site
                and a region for your site’s visitors
              </p>
            </div>
            <div className="security-list">
              <ul>
                <li
                  className="aos-init"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Latest security softwares
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Use TouchID, PIN protection and passwords to protect your
                  CNX-Account
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Encrypt your CNX-Data and create a backup in the cloud.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
