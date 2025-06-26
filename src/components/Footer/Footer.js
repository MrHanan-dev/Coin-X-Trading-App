import React from "react";
import { useLocation } from "react-router-dom";
import manager_logo from "../../assests/images/manager/logo-ftr.svg";
import coinx_logo from "../../assests/images/coinx/logo.svg";
import vpn_logo from "../../assests/images/vpn/vpn-logo-ftr.svg";
import blockware_logo from "../../assests/images/blockware/logo-img.svg";
import cnxconnect_logo from "../../assests/images/cnx-connect/ftr-logo.svg";
import wallet_logo from "../../assests/images/walletx/logo.svg";

import blockware_location from "../../assests/images/blockware/map-icon.svg";
import manager_location from "../../assests/images/manager/location.svg";
import vpn_location from "../../assests/images/vpn/map-icon-vpn.svg";
import coin_location from "../../assests/images/coinx/map-icon.svg";
import cnxconnect_location from "../../assests/images/cnx-connect/map-icon.svg";
import wallet_location from "../../assests/images/walletx/map-icon.svg";

import gooogle from "../../assests/images/google-play.png";
import app from "../../assests/images/app-store.png";
const Footer = () => {
  let location = useLocation();

  return (
    <footer className="ftr-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top-info text-center">
              <div className="company-info">
                <img
                  src={`${
                    location.pathname === "/cnx_network/admanager"
                      ? manager_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/coinx" ? coinx_logo : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/metachat"
                      ? vpn_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/vpn" ? vpn_logo : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/blockware"
                      ? blockware_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/cnxconnect"
                      ? cnxconnect_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/walletx"
                      ? wallet_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/presale"
                      ? blockware_logo
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/creditcard"
                      ? cnxconnect_logo
                      : ""
                  }`}
                  alt=""
                />
                <h3>CNX Utility Network</h3>
              </div>
              <div className="location">
                <img
                  src={`${
                    location.pathname === "/cnx_network/admanager"
                      ? manager_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/coinx"
                      ? coin_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/metachat"
                      ? vpn_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/vpn" ? vpn_location : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/blockware"
                      ? blockware_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/cnxconnect"
                      ? cnxconnect_location
                      : ""
                  }`}
                  alt=""
                />

                <img
                  src={`${
                    location.pathname === "/cnx_network/walletx"
                      ? wallet_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/presale"
                      ? blockware_location
                      : ""
                  }`}
                  alt=""
                />
                <img
                  src={`${
                    location.pathname === "/cnx_network/creditcard"
                      ? cnxconnect_location
                      : ""
                  }`}
                  alt=""
                />
                <h4>CNX-Network NV</h4>
                <p>
                  letsch Inc. <br />
                  Laan van Nieuw-Oost-Indie 125 <br />
                  2571HD
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="copyright-wrap">
              <h6>CNX-Network 2022 © All right reserved</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="social-links">
              <ul className="list-unstyled">
                <li>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-paper-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="download-app">
              <h6>Available on:</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="">
                    <img src={gooogle} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={app} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
