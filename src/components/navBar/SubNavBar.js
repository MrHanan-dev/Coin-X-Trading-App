import React from "react";
import { Link, useLocation } from "react-router-dom";

import active from "../../assests/images/product-icons/manager-active.svg";
import manager from "../../assests/images/product-icons/manager.svg";

import cnx from "../../assests/images/product-icons/cnx-connect.svg";
import cnx_active from "../../assests/images/product-icons/cnx-connect-active.svg";

import coinx from "../../assests/images/product-icons/coinx.svg";
import coinx_active from "../../assests/images/product-icons/coinx-active.svg";

import meta from "../../assests/images/product-icons/meta-chat.svg";
import meta_active from "../../assests/images/product-icons/meta-chat-active.svg";

import blockware from "../../assests/images/product-icons/blockware.svg";
import blockware_active from "../../assests/images/product-icons/blockware-active.svg";

import vpn from "../../assests/images/product-icons/vpn-connection.svg";
import vpn_active from "../../assests/images/product-icons/vpn-connection-active.svg";

import walletx from "../../assests/images/product-icons/walletx.svg";
import walletx_active from "../../assests/images/product-icons/walletx-active.svg";

import creditcard_active from "../../assests/images/product-icons/creditcard-active.svg";

const SubNavBar = () => {
  let location = useLocation();

  return (
    <section className="product-sec manager-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
                className={`product-wraper ${
                    location.pathname === "/cnx_network/admanager"
                        ? "manager-page"
                        : location.pathname === "/cnx_network/cnxconnect"
                            ? "cnxconnect-page"
                            : location.pathname === "/cnx_network/coinx"
                                ? "coinx-page"
                                : location.pathname === "/cnx_network/metachat"
                                    ? "metachat-page"
                                    : location.pathname === "/cnx_network/blockware"
                                        ? "blockware-page"
                                        : location.pathname === "/cnx_network/vpn"
                                            ? "vpn-page"
                                            : location.pathname === "/cnx_network/walletx"
                                                ? "walletx-page"
                                                : location.pathname === "/cnx_network/presale"
                                                    ? "presale-page"
                                                    : location.pathname === "/cnx_network/creditcard"
                                                        ? "creditcard-page"
                                                        : ""
                }`}
            >
              <ul className="list-unstyled">
                <li
                  className={`${
                    location.pathname === "/cnx_network/admanager"
                      ? "active-page-manager"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/admanager">
                    <img src={active} alt="active" className="active-active" />
                    <img src={manager} alt="active" className="non-icon" />
                    AdManager
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/cnxconnect"
                      ? "active-page-cnxconnect"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/cnxconnect">
                    <img src={cnx} alt="cnx" className="non-active" />
                    <img src={cnx_active} alt="cnx" className="active-active" />
                    CNX-Connect
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/coinx"
                      ? "active-page-coinx"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/coinx">
                    <img src={coinx} alt="coinx" className="non-active"/>
                    <img src={coinx_active} alt="coinx" className="active-active"/>
                    CoinX
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/metachat"
                      ? "active-page-metachat"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/metachat">
                    <img src={meta} alt="meta" className="non-active" />
                    <img src={meta_active} alt="meta" className="active-active" />
                    MetaChat
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/blockware"
                      ? "active-page-blockware"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/blockware">
                    <img src={blockware} alt="blockware" className="non-active"/>
                    <img src={blockware_active} alt="blockware" className="active-active"/>
                    Blockware
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/vpn"
                      ? "active-page-vpn"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/vpn">
                    <img src={vpn} alt="vpn" className="non-active"/>
                    <img src={vpn_active} alt="vpn" className="active-active"/>
                    VPN Connection
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/walletx"
                      ? "active-page-walletx"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/walletx">
                    <img src={walletx} alt="walletx" className="non-active"/>
                    <img src={walletx_active} alt="walletx" className="active-active"/>
                    WalletX
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/cnx_network/creditcard"
                      ? "active-page-creditcard"
                      : ""
                  }`}
                >
                  <Link to="/cnx_network/creditcard">
                    <img src={walletx} alt="creditcard" className="non-active"/>
                    <img src={creditcard_active} alt="creditcard" className="active-active"/>
                    Credit Card
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubNavBar;
