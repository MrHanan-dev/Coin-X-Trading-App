import React from "react";

import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import Footer from "../Footer";

const NodeJS = () => {
  return (
    <>
      <header class="NodeJS">
        <div class="container h-100 mt-5">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img ">
              <h1 class="fw-bolder text-dark">Node.Js</h1>
              <p class="lead text-dark">
              Get in the Network             </p>
              <div class="btn-toolbar justify-content-center">
                <button
                  type="button"
                  class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
                >
                  Download Now
                </button>
                <button
                  type="button"
                  class="btn btn-light  btn-lg rounded-pill px-4  mx-3"
                >
                  More information
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SectionTwo/>
      <SectionThree />
      <Footer />
    </>
  );
};

export default NodeJS;
