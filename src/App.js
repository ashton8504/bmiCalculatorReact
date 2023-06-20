import BMICalculator from "./Components/BMICalculator"
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="center-container">
        <h1 className="header--title">React BMI Calculator</h1>
        <BMICalculator />
      </div>
    </div>
  );
}

export default App;
