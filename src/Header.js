import React from "react";
import IconLabelTabs from "./Tabs";
import headerlogo from "./images/CX_Logo.png";
const Header = () => {
  return (
    <>
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center upper-img">
              <img src={headerlogo} alt="heroimg" className="img-circle" />
              <h1 class="fw-bold " style={{ fontSize: 30 }}>
                CNX-Network
              </h1>
              <p class="" style={{ fontSize: 16 }}>
                The Future of Blockchain Technology
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Below Header Section */}

      <header class="bg-black py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center justify-content-start">
            <div class="col-lg-6 col-xl-5 col-xxl-3">
              <div class="my-5 text-center text-xl-start">
                <h1
                  class="display-2 fw-bold text-white  mb-2"
                  style={{ fontSize: 60 }}
                >
                  First Mining ICO Token Start Up
                </h1>
                <p class="fw-normal text-white mb-4" style={{ fontSize: 20 }}>
                  Regarded as a synonym to cryptocurrency blockchain is much
                  more than a payment option
                </p>
                <div class="d-grid gap-3 d-flex justify-content-sm-center justify-content-xl-start align-items-center">
                  {/* <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    FIND OUR MORE
                  </a>
                  <a class="btn btn-outline-light btn-lg px-4" href="#!">
                    WHITEPAPER
                  </a> */}
                  <a
                    class="btn  btn-style btn-style-border  justify-content-sm-center "
                    type="submit"
                  >
                    FIND MORE
                  </a>
                  <a
                    class="btn  btn-style btn-style-border  justify-content-sm-center "
                    type="submit"
                  >
                    WHITE PAPER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
