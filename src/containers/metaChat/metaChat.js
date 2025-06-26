import React from "react";
import Banner from "../../components/metaChatComponent/section1-Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Encrypted from "../../components/metaChatComponent/section2-Encrypted/Encrypted";
import Earning from "../../components/metaChatComponent/section3-Earning/Earning";
import Powerful from "../../components/metaChatComponent/section4-Powerful/Powerful";
import Install from "../../components/metaChatComponent/section5-Install/Install";
import Payment from "../../components/metaChatComponent/section6-Payment/Payment";
const metaChat = () => {
  return (
    <>
      <Banner />
      <Encrypted />
      <Earning />
      <Powerful />
      <Install />
      <Payment />
      <Footer />
    </>
  );
};

export default metaChat;
