import React from "react";
import volcono from "../../../assests/images/blockware/volcano-powder.svg";
import water from "../../../assests/images/blockware/water-powder.svg";
import solar from "../../../assests/images/blockware/solar-powder.svg";
const Clean = () => {
  return (
    <section className="clean-source">
      <div className="container">
        <div className="clean-source-head blockware-head">
          <h2>Clean Sources</h2>
          <p>
            CNX is looking into ways to make the crypto mining in an envirement
            friendly ways. We are searching for cooperations in clean ways for
            energy.
          </p>
        </div>
        <div className="sources-we-use">
          <div
            className="source aos-init"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={volcono} alt="" className="img-fluid" />
            <p>Vulcano Powered Sources</p>
          </div>
          <div
            className="source aos-init"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={water} alt="" className="img-fluid" />
            <p>Water Powered Sources</p>
          </div>
          <div
            className="source aos-init"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={solar} alt="" className="img-fluid" />
            <p>Solar Powered Sources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clean;
