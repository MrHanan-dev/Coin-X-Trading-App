import React from "react";
// import Mobileone from "../public/images/Mobile.png";
import Mobileone from "./images/Mobile.png";
const SectionTwo = () => {
  return (
    <>
      {/* <section class=" bg-black py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <div class="img-fluid rounded mb-5 mb-lg-0">
                <div class="Mobile-img"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <h1 class="fw-bolder text-white my-2 ">
                First Wallet ICO Token Start Up
              </h1>
              <p class="lead fw-normal text-white my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse a labore aliquam beatae expedita. Blanditiis
                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                expedita, maiores eaque quisquam. Lore
              </p>
              <div class="d-grid gap-3 d-flex justify-content-sm-center justify-content-xl-start align-items-center my-5">
                <button
                  class="btn  btn-style btn-style-border  border-primary  justify-content-sm-center "
                  type="submit"
                >
                  Apple
                </button>
                <button
                  class="btn  btn-style btn-style-border border-success justify-content-sm-center "
                  type="submit"
                >
                  Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="bg-black py-5">
        <div class="container " data-aos="fade-up">
          <div class="row gx-0 px-5 my-5 ">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content">
                <h1 class="fw-bolder text-white display-2 my-2 ">
                  First Wallet ICO Token Start Up
                </h1>
                <p class="lead fw-normal text-white my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  est, ut esse a labore aliquam beatae expedita. Blanditiis
                  impedit numquam libero molestiae et fugit cupiditate,
                  quibusdam expedita, maiores eaque quisquam. Lore
                </p>
                <div class="d-grid gap-3 d-flex justify-content-sm-center justify-content-xl-start align-items-center my-5">
                  <button
                    class="btn  btn-style btn-style-border  border-primary  justify-content-sm-center "
                    type="submit"
                  >
                    Apple
                  </button>
                  <button
                    class="btn  btn-style btn-style-border border-success justify-content-sm-center "
                    type="submit"
                  >
                    Android
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={Mobileone} class="img-fluid" alt="W3Schools.com"></img>
              {/* <img src="./images" class="img-fluid" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
