import React from "react";
import Banner from "../../components/coinXComponent/section1-Banner/Banner";
import Utility from "../../components/coinXComponent/section2-Utility/Utility";
import Investment from "../../components/coinXComponent/section3-Investment/Investment";
import Investor from "../../components/coinXComponent/section4-Investor/Investor";
import DeFi from "../../components/coinXComponent/section5-DeFi/DeFi";
import Pay from "../../components/coinXComponent/section6-Pay/Pay";
import Footer from "../../components/Footer/Footer";
const coinX = () => {
  return (
    <>
      <Banner />
      <Utility />
      <Investment />
      <Investor />
      <DeFi />
      <Pay />
      <Footer />
    </>
  );
};

export default coinX;
