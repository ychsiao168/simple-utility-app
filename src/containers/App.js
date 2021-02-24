
import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Container } from "@material-ui/core"
import BinConverter from "../components/BinConverter/BinConverter"
import QRcode from "../components/QRCode/Qrcode"
import Stopwatch from "../components/Stopwatch/Stopwatch"
import WeatherTaiwan from "../components/Weather/WeatherTaiwan"
import AirQuality from "../components/AirQuality/AirQuality"
import Filehash from "../components/FileHash/Filehash"

const App = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          indicatorColor="secondary"
          onChange={(e, idx) => setTabIndex(idx)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={<div>Binary<br />Converter</div>} value={0} />
          <Tab label={<div>QR<br />Code</div>} value={1} />
          <Tab label={<div>File<br />Hash</div>} value={2} />
          <Tab label={<div>Stop<br />Watch</div>} value={3} />
          <Tab label={<div>Weather</div>} value={4} />
          <Tab label={<div>Air<br />Quality</div>} value={5} />
        </Tabs>
      </AppBar>


      {tabIndex === 0 && <BinConverter />}
      {tabIndex === 1 && <QRcode />}
      {tabIndex === 2 && <Filehash />}
      {tabIndex === 3 && <Stopwatch />}
      {tabIndex === 4 && <WeatherTaiwan />}
      {tabIndex === 5 && <AirQuality />}

    </Container>
  );
}

export default App;
