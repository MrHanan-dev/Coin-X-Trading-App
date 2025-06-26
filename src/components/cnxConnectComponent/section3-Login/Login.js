import React from "react";
import register from "../../../assests/images/cnx-connect/register-icon.svg";
import auth from "../../../assests/images/cnx-connect/auth-icon.svg";
import access from "../../../assests/images/cnx-connect/access-icon.svg";
const Login = () => {
  return (
    <section className="default-cnx-padd network-sec cnx-hd-wraper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> One Login For The Whole Network
              </h2>
              <p>Connect all your utility apps through one simple login.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="network-wrap aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={register} alt="" />
              <h4>Register </h4>
              <p>
                You only have to register once to the CNX-Network to use all the
                software we have created
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="network-wrap aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={auth} alt="" />
              <h4>Authentication </h4>
              <p>
                The authenticator creates a new 6-digit code every minute and
                has more safety features
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="network-wrap aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={access} alt="" />
              <h4>Access </h4>
              <p>
                People can register at the CNX-Network and gain access to its
                associated apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
