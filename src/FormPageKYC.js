import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Form1 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div class="container ">
          <div class=" py-5 text-center">
            <h1 class="fw-bolder text-white">KYC</h1>
            <p class="lead text-white">
              Before receiving the assets, we need to do a KYC
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <div class="  text-center">
                  <h2 class="fw-medium text-white mb-5">Account details</h2>
                </div>

                <form role="form">
                  <div class="form-group text-light ">
                    <label for="username" class="fs-4 ">
                      {/* {" "}
                          <span>
                            <FontAwesomeIcon
                              icon={PersonIcon}
                              size="2x"
                              color="white"
                            />
                          </span> */}
                      Full name
                    </label>

                    <hr />
                    <label for="username" class="fs-4 ">
                      Date of Birth{" "}
                    </label>

                    <hr />
                    <label for="username" class="fs-4 ">
                      Email
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Email Confirmation{" "}
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Address + Zipcode
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Landline
                    </label>
                    <hr />
                  </div>

                  <div class="btn-toolbar justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Form2 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div class="container ">
          <div class=" py-5 text-center">
            <h1 class="fw-bolder text-white">KYC</h1>
            <p class="lead text-white">
              Before receiving the assets, we need to do a KYC
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <form role="form">
                  <div class="form-group text-light ">
                    <label for="username" class="fs-4 my-4">
                      Choose Identification
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Passport"
                      required
                      class="form-control p-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Drivers Licence"
                      required
                      class="form-control p-3 my-3"
                    />
                  </div>

                  <div class="container">
                    <div class="row pb-5 mb-4 d-flex justify-content-center my-5 ">
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">
                          Front side Passport
                        </h4>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">
                          Back side Passport
                        </h4>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">Selfie Photo</h4>
                      </div>
                    </div>
                  </div>

                  <div class="btn-toolbar justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg primary rounded-pill px-4 m-3  "
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Form3 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div class="container ">
          <div class=" col-12 py-5 text-center">
            <h1 class="fw-bolder text-white">Payment</h1>
            <p class="lead text-white">
              After the payment you will receive an wmail with the login details
              for WalletX. There you can see your coins you have bought during
              the presale.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <form role="form">
                  <div class="form-group text-light ">
                    <label for="username" class="fs-4 my-4">
                      Choose Identification
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Creditcard"
                      required
                      class="form-control p-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Paypal"
                      required
                      class="form-control p-3 my-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Pay in Bitcoin"
                      required
                      class="form-control p-3 my-3"
                    />
                  </div>

                  <div class="btn-toolbar justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg primary rounded-pill px-4 m-3  "
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Form4 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div class="container ">
          <div class="  py-5 text-center ">
            <h1 class="fw-bolder text-white">Payment Successful</h1>
            <p class="lead text-white ">
              After the payment you will receive an wmail with the login details
              for WalletX. There you can see your coins you have bought during
              the presale. After the payment you will receive an wmail with the
              login details for WalletX. There you can see your coins you have
              bought during the presale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function FormPage() {
  return (
    <>
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
    </>
  );
}
