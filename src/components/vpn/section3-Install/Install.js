import React from "react";
import android from "../../../assests/images/vpn/android.svg";
import appStore from "../../../assests/images/vpn/appstore.svg";
const Install = () => {
  return (
    <section className="default-vpn-padd install-sec vpn-hd-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Install CNX-VPN
              </h2>
              <p>
                Whether you are on your phone or tablet — no matter where you
                are or what devices you are using — CNX-VPN has you connected
                and secure.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="install-img-wrap aos-init"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img src={android} alt="" className="img-fluid" />
              <img src={appStore} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="install-fea-wrap">
              <ul>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Advance encryption
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  No data transfer caps
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  Servers in 75+ regions
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Zero traffic logs
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  Proxy web server
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  Secure access to media
                </li>
                <li
                  className="aos-init"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Install;
