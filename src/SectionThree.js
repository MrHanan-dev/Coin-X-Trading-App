import React from "react";
import headerlogo from "./images/CX_Logo.png";
import section3Image from "./images/sec3.png";

const SectionThree = () => {
  return (
    <>
      <header class="section3">
        <div class="container h-100">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img mt-5">
              <h1 class="fw-bolder text-dark mt-5">
                Trade with Confidence. Trade WalletX.
              </h1>
              <p class="lead text-dark mb-5 ">
                Secure, safe and for a normal price.{" "}
              </p>

              <div class="table100 ver1  m-b-110">
                <div class="table100-body js-pscroll">
                  <table>
                    <tbody>
                      <tr class="row100 body">
                        <td class="cell100 column1">Bitcoin</td>
                        <td class="cell100 column2">$42,537</td>
                        <td class="cell100 column3">14%</td>
                        <td class="cell100 column4">
                          <div class="">
                            <button
                              type="button"
                              class="btn btn-success mx-2 px-5"
                            >
                              Sell
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary mx-2 px-5"
                            >
                              Buy
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">Coin X </td>
                        <td class="cell100 column2">$0.08</td>
                        <td class="cell100 column3">14% </td>
                        <td class="cell100 column4">
                          <div class="">
                            <button
                              type="button"
                              class="btn btn-success mx-2 px-5"
                            >
                              Sell
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary mx-2 px-5"
                            >
                              Buy
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">Ethereum</td>
                        <td class="cell100 column2">$3,113.82</td>
                        <td class="cell100 column3">14%</td>
                        <td class="cell100 column4">
                          <div class="">
                            <button
                              type="button"
                              class="btn btn-success mx-2 px-5"
                            >
                              Sell
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary mx-2 px-5"
                            >
                              Buy
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr class="row100 body">
                        <td class="cell100 column1">Cardano</td>
                        <td class="cell100 column2">$0.15</td>
                        <td class="cell100 column3">14%</td>
                        <td class="cell100 column4">
                          <div class="">
                            <button
                              type="button"
                              class="btn btn-success mx-2 px-5"
                            >
                              Sell
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary mx-2 px-5"
                            >
                              Buy
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 class="fw-bolder text-dark mt-5">200+ more assets</h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SectionThree;
