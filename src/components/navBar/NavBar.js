import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import manager_logo from "../../assests/images/manager/logo.svg";
import coin_logo from "../../assests/images/coinx/logo.svg";
import meta_logo from "../../assests/images/metachat/logo.svg";
import vpn_logo from "../../assests/images/vpn/logo.svg";
import blockware_logo from "../../assests/images/blockware/logo-img.svg";
import cnxconnect_logo from "../../assests/images/cnx-connect/logo.svg";
import wallet_logo from "../../assests/images/walletx/logo.svg";
import presale_logo from "../../assests/images/logo.svg";
import SubHearder from "./SubNavBar";

const NavBar = () => {
  let location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <section className="nav-wraper default">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid p-0">
                  <a className="navbar-brand" href="index.html">
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
                        location.pathname === "/cnx_network/coinx"
                          ? coin_logo
                          : ""
                      }`}
                      alt=""
                    />
                    <img
                      src={`${
                        location.pathname === "/cnx_network/metachat"
                          ? meta_logo
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
                          ? presale_logo
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
                    <span>CNX-Network</span>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={handleShow}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                      <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>
                          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a className="nav-link" href="">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="">
                                Whitepaper
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="">
                                Blockchain
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="">
                                Team
                              </a>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="/cnx_network/presale"
                              >
                                Pre-sale
                              </Link>
                            </li>
                          </ul>
                          <div
                            className={`nav-btn${
                              location.pathname === "/cnx_network/admanager"
                                ? "-manager"
                                : location.pathname ===
                                  "/cnx_network/cnxconnect"
                                ? "-cnxconnect"
                                : location.pathname === "/cnx_network/coinx"
                                ? "-coinx"
                                : location.pathname === "/cnx_network/metachat"
                                ? "-metachat"
                                : location.pathname === "/cnx_network/blockware"
                                ? "-blockware"
                                : location.pathname === "/cnx_network/vpn"
                                ? "-vpn"
                                : location.pathname === "/cnx_network/walletx"
                                ? "-walletx"
                                : location.pathname === "/cnx_network/presale"
                                ? "-presale"
                                : location.pathname ===
                                  "/cnx_network/creditcard"
                                ? "-creditcard"
                                : ""
                            }`}
                          >
                            <a
                              href=""
                              className={`slide${
                                location.pathname === "/cnx_network/admanager"
                                  ? "-manager"
                                  : location.pathname ===
                                    "/cnx_network/cnxconnect"
                                  ? "-cnxconnect"
                                  : location.pathname === "/cnx_network/coinx"
                                  ? "-coinx"
                                  : location.pathname ===
                                    "/cnx_network/metachat"
                                  ? "-metachat"
                                  : location.pathname ===
                                    "/cnx_network/blockware"
                                  ? "-blockware"
                                  : location.pathname === "/cnx_network/vpn"
                                  ? "-vpn"
                                  : location.pathname === "/cnx_network/walletx"
                                  ? "-walletx"
                                  : location.pathname === "/cnx_network/presale"
                                  ? "-presale"
                                  : location.pathname ===
                                    "/cnx_network/creditcard"
                                  ? "-creditcard"
                                  : ""
                              }`}
                            >
                              Utility Network
                            </a>
                          </div>
                        </Offcanvas.Body>
                      </Offcanvas>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Whitepaper
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Blockchain
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cnx_network/presale">
                          Pre-sale
                        </Link>
                      </li>
                    </ul>
                    <div
                      className={`nav-btn${
                        location.pathname === "/cnx_network/admanager"
                          ? "-manager"
                          : location.pathname === "/cnx_network/cnxconnect"
                          ? "-cnxconnect"
                          : location.pathname === "/cnx_network/coinx"
                          ? "-coinx"
                          : location.pathname === "/cnx_network/metachat"
                          ? "-metachat"
                          : location.pathname === "/cnx_network/blockware"
                          ? "-blockware"
                          : location.pathname === "/cnx_network/vpn"
                          ? "-vpn"
                          : location.pathname === "/cnx_network/walletx"
                          ? "-walletx"
                          : location.pathname === "/cnx_network/presale"
                          ? "-presale"
                          : location.pathname === "/cnx_network/creditcard"
                          ? "-creditcard"
                          : ""
                      }`}
                    >
                      <a
                        href=""
                        className={`slide${
                          location.pathname === "/cnx_network/admanager"
                            ? "-manager"
                            : location.pathname === "/cnx_network/cnxconnect"
                            ? "-cnxconnect"
                            : location.pathname === "/cnx_network/coinx"
                            ? "-coinx"
                            : location.pathname === "/cnx_network/metachat"
                            ? "-metachat"
                            : location.pathname === "/cnx_network/blockware"
                            ? "-blockware"
                            : location.pathname === "/cnx_network/vpn"
                            ? "-vpn"
                            : location.pathname === "/cnx_network/walletx"
                            ? "-walletx"
                            : location.pathname === "/cnx_network/presale"
                            ? "-presale"
                            : location.pathname === "/cnx_network/creditcard"
                            ? "-creditcard"
                            : ""
                        }`}
                      >
                        Utility Network
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {location.pathname == "/cnx_network/presale" ? "" : <SubHearder />}
    </header>
  );
};

export default NavBar;
