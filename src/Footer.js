import React from "react";
import FooterLogo from "./images/CX_Logo.png";

const Footer = () => {
  return (
    <>
      <header class="Footer">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center upper-img">
              <img
                src={FooterLogo}
                alt="heroimg"
                className="img-circle_Footer"
              />
              <h2 class="fw-bolder">CNX Utility Network</h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Footer;
