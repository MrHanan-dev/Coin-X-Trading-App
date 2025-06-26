import React from "react";
import Banners from "../../components/adManagerComponents/section1-Banner/Banner";
import Monetise from "../../components/adManagerComponents/section2-Monetise/Monetise";
import Advertise from "../../components/adManagerComponents/section3-Advertise/Advertise";
import Earn from "../../components/adManagerComponents/section4-Earn/Earn";
import Advertisement from "../../components/adManagerComponents/section5-Advertisement/Advertisement";
import MonetizeAds from "../../components/adManagerComponents/section6-MonetizeAds/MonetizeAds";
import Footer from "../../components/Footer/Footer";
const admanager = () => {
  return (
    <>
      <Banners />
      <Monetise />
      <Advertise />
      <Earn />
      <Advertisement />
      <MonetizeAds />
      <Footer />
    </>
  );
};

export default admanager;
