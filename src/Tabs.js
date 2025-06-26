import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AdManager from "./TabPages/AdManager";
import CoinX from "./TabPages/CoinX";
import MetaChat from "./TabPages/MetaChat";
import NodeJS from "./TabPages/NodeJS";
import VPN from "./TabPages/VPN";
import WalletX from "./TabPages/WalletX";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import GppBadIcon from "@mui/icons-material/GppBad";
import ForumIcon from "@mui/icons-material/Forum";
import JavascriptIcon from "@mui/icons-material/Javascript";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CnxConnect from "./TabPages/CnxConnect";
import Navbar from "./navbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            style={{
              backgroundColor: "#1F1F1F",
              top: "70%",
            }}
            centered
          >
            <Tab
              icon={<PersonPinIcon sx={{ color: "white" }} />}
              label="AdManager"
              {...a11yProps(0)}
              style={{ color: "white" }}
            />

            <Tab
              icon={<GppBadIcon sx={{ color: "white" }} />}
              label="CNX-Connect"
              style={{ color: "white" }}
              {...a11yProps(1)}
            />
            <Tab
              label="CoinX"
              {...a11yProps(2)}
              icon={<PersonPinIcon sx={{ color: "white" }} />}
              style={{ color: "white" }}
            />
            <Tab
              label="MetaChat"
              {...a11yProps(2)}
              icon={<ForumIcon sx={{ color: "white" }} />}
              style={{ color: "white" }}
            />
            <Tab
              label="Node.js"
              {...a11yProps(2)}
              icon={<JavascriptIcon sx={{ color: "white" }} />}
              style={{ color: "white" }}
            />
            <Tab
              label="VPN Connection"
              {...a11yProps(2)}
              icon={<VpnLockIcon sx={{ color: "white" }} />}
              style={{ color: "white" }}
            />

            <Tab
              label="WalletX"
              {...a11yProps(2)}
              icon={<AccountBalanceWalletIcon sx={{ color: "white" }} />}
              style={{ color: "white" }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <AdManager />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CnxConnect />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CoinX />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MetaChat />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <NodeJS />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <VPN />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <WalletX />
        </TabPanel>
      </Box>
    </>
  );
}
