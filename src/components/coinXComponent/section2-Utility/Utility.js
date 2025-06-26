import React from "react";
import cnx_utility from "../../../assests/images/coinx/cnx-utility-img.svg";
const Utility = () => {
  return (
    <section className="cnx-utility">
      <div className="container">
        <div className="cnx-utility-head coinx-head">
          <h2>CNX-Utility Network</h2>
          <p>
            We are building a sustainable network of high-end profile companies
            and softwares.
          </p>
        </div>
        <div className="cnx-utilities">
          <ul>
            <li data-aos="fade-right" data-aos-delay="100">
              High-End Projects provided by our Developers
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              High-End Projects provided by our Developers
            </li>
            <li data-aos="fade-right" data-aos-delay="300">
              High-End Projects provided by our Developers
            </li>
          </ul>
          <img
            src={cnx_utility}
            alt=""
            className="img-fluid"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Utility;
