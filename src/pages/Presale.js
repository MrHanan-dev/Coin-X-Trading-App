import React from "react";
import Navbar from "../navbar";
import IconLabelTabs from "../Tabs";
import Table from "../images/InevestmentTable.png";
import FormPage from "../FormPageKYC";

import { Link } from "react-router-dom";

const Presale1 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
        // class="jumbotron bg-cover text-white"
      >
        <div class="container py-5 text-center">
          <h1 class="fw-bolder text-white">
            Become an Investor. The Presale is live.
          </h1>
          {/* <a href="#" role="button" class="btn btn-primary px-5">
            See All Features
          </a> */}
          <div class="btn-toolbar justify-content-center my-4">
            <Link to="/Presale/Presale2">
              <button
                type="button"
                class="btn btn-primary btn-lg primary rounded-pill px-5 mx-3 py-3 "
              >
                Invest Now
              </button>
            </Link>
          </div>

          <h2 class="fw-bolder text-white d-flex flex-start">
            Investment rewards
          </h2>
          <div
            class="col-lg-12 d-flex justify-content-center my-4"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={Table} class="img-fluid" alt="W3Schools.com"></img>
            {/* <img src="./images" class="img-fluid" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const Presale = () => {
  return (
    <>
      <Navbar />

      <Presale1 />
    </>
  );
};

export default Presale;
