
import './App.css';
import TabGroup from "../components/Tabgroup"
import BinConverter from "../components/Bin-converter"
import QRcode from "../components/Qrcode"
import Stopwatch from "../components/Stopwatch"
import Weathercards from "../components/Weathercards"
import AirQuality from "../components/AirQuality"
import Filehash from "../components/Filehash"

function App() {
  return (
    <div className="App">
      <TabGroup
        tabitmes={
          [
            { name: "binary-converter", bgcolor: "aliceblue", panel: <BinConverter /> },
            { name: "QR-Code", bgcolor: "cornsilk", panel: <QRcode /> },
            { name: "File-hash", bgcolor: "lavender", panel: <Filehash /> },
            { name: "Stopwatch", bgcolor: "yellowgreen", panel: <Stopwatch /> },
            { name: "Weather", bgcolor: "wheat", panel: <Weathercards /> },
            { name: "Air-Quality", bgcolor: "honeydew", panel: <AirQuality /> },

          ]
        }
      />
    </div>
  );
}

export default App;
