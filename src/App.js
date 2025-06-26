import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";

import Home from "./Home";
import Blockchain from "./pages/Blockchain";
import Team from "./pages/Team";
import Whitepaper from "./pages/Whitepaper";
import Presale from "./pages/Presale";
import Error from "./pages/Error";
import IconLabelTabs from "./Tabs";

import Presale2 from "./pages/Presale2";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar";
import Admanager from "./containers/admanager/admanager";
import Vpn from "./containers/vpn/vpn";
import CoinX from "./containers/coinX/coinX";
import MetaChat from "./containers/metaChat/metaChat";
import Blockware from "./containers/blockware/Blockware";
import CnxConnect from "./containers/cnxConnect/cnxConnect";
import WalletX from "./containers/walletX/walletX";
import PreSale from "./containers/preSale/preSale";
import CreditCard from "./containers/creditCard/creditCard";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Blockchain" element={<Blockchain />}></Route>
        <Route path="/Team" element={<Team />}></Route>
        <Route path="/Whitepaper" element={<Whitepaper />}></Route>
        <Route path="/Presale" element={<Presale />}></Route>
        <Route path="/Presale/Presale2" element={<Presale2 />}></Route>

        <Route path="/Presale/Presale2/Form1" element={<Form1 />}></Route>
        <Route path="/Presale/Presale2/Form2" element={<Form2 />}></Route>
        <Route path="/Presale/Presale2/Form3" element={<Form3 />}></Route>
        <Route path="/Presale/Presale2/Form4" element={<Form4 />}></Route>
        <Route path="/Utilitynetwork" element={<IconLabelTabs />}></Route>
        <Route component={<Error />}></Route>
        <Route
          path="/cnx_network"
          element={<Navigate replace to="/cnx_network/admanager" />}
        />
        <Route exact path="/cnx_network/admanager" element={<Admanager />} />
        <Route exact path="/cnx_network/vpn" element={<Vpn />} />
        <Route exact path="/cnx_network/coinx" element={<CoinX />} />
        <Route exact path="/cnx_network/metachat" element={<MetaChat />} />
        <Route exact path="/cnx_network/blockware" element={<Blockware />} />
        <Route exact path="/cnx_network/presale" element={<PreSale />} />
        <Route exact path="/cnx_network/creditcard" element={<CreditCard />} />
        <Route exact path="/cnx_network/cnxconnect" element={<CnxConnect />} />
        <Route exact path="/cnx_network/walletx" element={<WalletX />} />
      </Routes>
    </>
  );
}

export default App;
