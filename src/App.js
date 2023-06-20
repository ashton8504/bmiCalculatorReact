import React, { useState } from "react";
import BMICalculator from "./Components/BMICalculator";
import "./index.css";

function App() {
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (calculatedBMI) => {
    setBMI(calculatedBMI);
  };

  return (
    <div className="container">
      <div className="center-container">
        <h1 className="header--title">React BMI Calculator</h1>
        <BMICalculator onCalculate={calculateBMI} />
      </div>
    </div>
  );
}

export default App;
