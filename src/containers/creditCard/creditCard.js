import React from "react";
import Banner from "../../components/creditCardComponent/section1-Banner/Banner";
import Access from "../../components/creditCardComponent/section2-access/Access";
import CNXCard from "../../components/creditCardComponent/section3-CNXCard/CNXCard";
import Convert from "../../components/creditCardComponent/section4-Convert/Convert";
import GetItNow from "../../components/creditCardComponent/section5-GetItNow/GetItNow";
import Download from "../../components/creditCardComponent/section6-Download/Download";
import Footer from "../../components/Footer/Footer";
const creditCard = () => {
  return (
    <>
      <Banner />
      <Access />
      <CNXCard />
      <Convert />
      <GetItNow />
      <Download />
      <Footer />
    </>
  );
};

export default creditCard;
