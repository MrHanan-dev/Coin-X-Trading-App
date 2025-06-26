import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import Navbar from "./navbar";
import { Link } from "react-router-dom";
export default function Form1() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div class="container ">
          <div class=" py-5 text-center">
            <h1 class="fw-bolder text-white">KYC</h1>
            <p class="text-white" style={{ fontSize: 16 }}>
              Before receiving the assets, we need to do a KYC
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <div class=" ">
                  <h2 class="fw-bold text-white mb-5">Account details</h2>
                </div>

                <form role="form">
                  <div class="form-group text-light">
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Full name
                      </label>
                    </div>

                    <hr />
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Date of Birth
                      </label>
                    </div>

                    <hr />
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Email
                      </label>
                    </div>

                    <hr />
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Email Confirmation
                      </label>
                    </div>

                    <hr />
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Address + Zipcode
                      </label>
                    </div>

                    <hr />
                    <div class="d-flex align-items-center">
                      <EmailOutlinedIcon fontSize="large" color="white" />
                      <label for="username" class="fs-4 px-3 ">
                        Landline
                      </label>
                    </div>

                    <hr />
                    {/* 
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
                    <hr /> */}
                  </div>

                  <Link to="/Presale/Presale2/Form2">
                    <div class=" d-flex justify-content-end ">
                      {/* <button
                        type="button"
                        class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
                      >
                        Continue
                      </button> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-lg primary rounded-pill px-4 my-5 py-3 "
                      >
                        Continue
                      </button>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
