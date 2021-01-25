
import './App.css';
import TabGroup from "../components/Tabgroup"
import BinConverter from "../components/Bin-converter"
import QRcode from "../components/Qrcode"
import Stopwatch from "../components/Stopwatch"
import Weathercards from "../components/Weathercards"


function App() {
  return (
    <div className="App">
      <TabGroup
        tabitmes={
          [
            { name: "binary-converter", bgcolor: "aliceblue", panel: <BinConverter /> },
            { name: "QR-Code", bgcolor: "cornsilk", panel: <QRcode /> },
            { name: "Stopwatch", bgcolor: "yellowgreen", panel: <Stopwatch /> },
            { name: "Weather", bgcolor: "wheat", panel: <Weathercards /> },
          ]
        }
      />
    </div>
  );
}

export default App;
