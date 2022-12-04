import "./App.css";
import SlopeCalculator from "./components/SlopeCalculator";
const App = () => {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SlopeCalculator></SlopeCalculator>
    </div>
  );
};

export default App;
