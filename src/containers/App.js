
import './App.css';
import TabGroup from "../components/tabgroup"
import BinConverter from "../components/bin-converter"
import SimpleTimer from "../components/simple-timer"

function App() {
  return (
    <div className="App">
      <TabGroup
        tabitmes={
          [
            { name: "binary converter", panel: <BinConverter /> },
            { name: "timer", panel: <SimpleTimer /> },
            { name: "undefined", panel: <div></div> },
          ]
        }
      />
    </div>
  );
}

export default App;
