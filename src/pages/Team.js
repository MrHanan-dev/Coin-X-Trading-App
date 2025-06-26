import React from "react";
import Navbar from "../navbar";
import CoreTeam from "../CoreTeam";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const CEOTeam = () => {
  return (
    <>
      <div class="bg-black">
        <div class="container  ">
          <div class="row pb-5">
            <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
              <div class="my-5 shadow-sm border-0 rounded">
                <h1 class="my-5 mx-2 fw-bold text-white">Founder</h1>
                <div class="card-body p-0 d-flex flex-row">
                  <div class="border border-light border-4 MyBorder "></div>

                  <div class="p-4 col mx-3">
                    <h3 class="mb-0 text-white" style={{ fontSize: 18 }}>
                      Full Name
                    </h3>
                    <p class="text-white " style={{ fontSize: 14 }}>
                      CEO - Consultant
                    </p>

                    <ul class="social list-inline my-4">
                      <li class="list-inline-item ">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="3x"
                            color="white"
                          />{" "}
                        </a>
                      </li>
                      <li class="list-inline-item mx-4">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="3x"
                            color="white"
                          />{" "}
                        </a>
                      </li>
                      <li class="list-inline-item ">
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            size="3x"
                            color="white"
                          />{" "}
                        </a>
                      </li>
                    </ul>
                    <p class="text-white " style={{ fontSize: 14 }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap.
                    </p>
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

const Team = () => {
  return (
    <>
      <Navbar />

      <CEOTeam />

      <CoreTeam />
      <CoreTeam />

      <CoreTeam />
      <CoreTeam />
    </>
  );
};

export default Team;
