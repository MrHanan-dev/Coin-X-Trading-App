import React from "react";
import Banner from "../../components/blockwareComponent/section1-Banner/Banner";
import Decentralisatized from "../../components/blockwareComponent/section2-Decentralisatized/Decentralisatized";
import Network from "../../components/blockwareComponent/section3-Network/Network";
import Clean from "../../components/blockwareComponent/section4-Clean/Clean";
import Environment from "../../components/blockwareComponent/section5-Environment/Environment";
import Records from "../../components/blockwareComponent/section6-Records/Records";
import Footer from "../../components/Footer/Footer";
const Blockware = () => {
  return (
    <>
      <Banner />
      <Decentralisatized />
      <Network />
      <Clean />
      <Environment />
      <Records />
      <Footer />
    </>
  );
};

export default Blockware;
