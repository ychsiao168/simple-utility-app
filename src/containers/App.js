
import './App.css';
import TabGroup from "../components/Tabgroup"
import BinConverter from "../components/Bin-converter"
import QRcode from "../components/Qrcode"
import Stopwatch from "../components/Stopwatch"

function App() {
  return (
    <div className="App">
      <TabGroup
        tabitmes={
          [
            { name: "binary converter", panel: <BinConverter /> },
            { name: "QR Code", panel: <QRcode /> },
            { name: "Stopwatch", panel: <Stopwatch /> },
          ]
        }
      />
    </div>
  );
}

export default App;
