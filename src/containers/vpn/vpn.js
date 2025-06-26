import React from "react";
import Banners from "../../components/vpn/section1-Banner/Banner";
import Globe from "../../components/vpn/section2-Globe/Globe";
import Install from "../../components/vpn/section3-Install/Install";
import Safe from "../../components/vpn/section4-Safe/Safe";
import Join from "../../components/vpn/section5-Join/Join";
import Free from "../../components/vpn/section6-Free/Free";
import Footer from "../../components/Footer/Footer";
const vpn = () => {
  return (
    <>
      <Banners />
      <Globe />
      <Install />
      <Safe />
      <Join />
      <Free />
      <Footer />
    </>
  );
};

export default vpn;
