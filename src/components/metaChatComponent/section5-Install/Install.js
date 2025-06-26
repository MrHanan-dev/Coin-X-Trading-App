import React from "react";
import android from "../../../assests/images/metachat/android-logo.svg";
import IOS from "../../../assests/images/metachat/apple-logo.svg";
const Install = () => {
  return (
    <section className="install-meta-chat mc_sec">
      <div className="container">
        <div className="install-metachat-head">
          <h2>Install MetaChat</h2>
          <p>
            Install MetaChat for both Android and IOS available on both android
            and IOS systems
          </p>
        </div>
        <div className="installing-platforms">
          <div
            className="install-platform aos-init"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="100"
          >
            <img src={android} alt="" className="img-fluid" />
            <p>Android</p>
          </div>
          <div
            className="install-platform aos-init"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="200"
          >
            <img src={IOS} alt="" className="img-fluid" />
            <p>IOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Install;
