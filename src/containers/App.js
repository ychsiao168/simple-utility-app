
import './App.css';
import TabGroup from "../components/Tabgroup"
import BinConverter from "../components/Bin-converter"
import QRcode from "../components/Qrcode"
import SimpleTimer from "../components/Simple-timer"

function App() {
  return (
    <div className="App">
      <TabGroup
        tabitmes={
          [
            { name: "binary converter", panel: <BinConverter /> },
            { name: "QR Code", panel: <QRcode /> },
            { name: "SimpleTimer", panel: <SimpleTimer /> },
          ]
        }
      />
    </div>
  );
}

export default App;
