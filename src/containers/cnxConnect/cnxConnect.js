import React from "react";
import Banner from "../../components/cnxConnectComponent/section1-banner/Banner";
import Secure from "../../components/cnxConnectComponent/section2-Secure/Secure";
import Login from "../../components/cnxConnectComponent/section3-Login/Login";
import Backup from "../../components/cnxConnectComponent/section4-Backup/Backup";
import Future from "../../components/cnxConnectComponent/section5-Future/Future";
import Security from "../../components/cnxConnectComponent/section7-Security/Security";
import Footer from "../../components/Footer/Footer";

const cnxConnect = () => {
  return (
    <>
      <Banner />
      <Secure />
      <Login />
      <Backup />
      <Future />
      <Security />
      <Footer />
    </>
  );
};

export default cnxConnect;
