import React from "react";
import Banner from "../../components/walletXComponent/section1-Banner/Banner";
import Assets from "../../components/walletXComponent/section2-Assets/Assets";
import Trade from "../../components/walletXComponent/section3-Trade/Trade";
import Referral from "../../components/walletXComponent/section4-Referral/Referral";
import Reliable from "../../components/walletXComponent/section5-Reliable/Reliable";
import Staking from "../../components/walletXComponent/section6-Staking/Staking";
import Footer from "../../components/Footer/Footer";
const walletX = () => {
  return (
    <>
      <Banner />
      <Assets />
      <Trade />
      <Referral />
      <Reliable />
      <Staking />
      <Footer />
    </>
  );
};

export default walletX;
