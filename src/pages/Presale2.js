import React from "react";
import Navbar from "../navbar";
import IconLabelTabs from "../Tabs";
import Table from "../images/InevestmentTable.png";
import FormPage from "../FormPageKYC";

import { Link } from "react-router-dom";

const Presale2 = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "black",
          height: "100%",
          padding: ".6rem",
        }}
        // class="jumbotron bg-cover text-white"
      >
        <div class="container py-5 text-center">
          <h1 class="fw-bolder text-white">
            Choose your amount you want to Invest
          </h1>
          <p class=" text-white">
            After purchasing you will receive the instructions with how to get
            your assets in WalletX
          </p>

          <div class="d-flex flex-row justify-content-center">
            <div
              class="card"
              style={{
                width: "18rem",
                height: "9rem",
                backgroundColor: "white",
              }}
            >
              <div class="card-body d-flex align-items-center justify-content-center">
                <h1 class="card-title ">$ 0.00</h1>
              </div>
            </div>
          </div>
          <Link to="/Presale/Presale2/Form1">
            <div class=" d-flex justify-content-center">
              {/* <button type="button" class="btn btn-primary btn-lg mt-5">
                Continue
              </button> */}
              <button
                type="button"
                class="btn btn-primary btn-lg primary rounded-pill px-5 my-5 py-3 "
              >
                Continue
              </button>
            </div>
          </Link>

          <div class="container">
            <div class="row pb-5 mb-4 d-flex justify-content-center my-5 ">
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 1</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 2</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 3</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 4</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 5</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presale2;
