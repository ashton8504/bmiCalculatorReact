import React, { useState } from "react";

export default function BMICalculator() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [pounds, setPounds] = useState("");
  const [bmi, setBMI] = useState(null); // State to store the calculated BMI

  const calculateBMI = () => {
    const totalHeightInches = parseInt(feet) * 12 + parseInt(inches);
    const weightInKg = parseInt(pounds) * 0.453592; // Convert pounds to kilograms
    const heightInMeters = totalHeightInches * 0.0254; // Convert inches to meters

    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI); // Update the state with the calculated BMI
    setFeet("");
    setInches("");
    setPounds("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
  };

  return (
    <div className="bmi-form">
      <h2 className="input-header">Enter your height:</h2>
      <div className="input-container">
        <label className="input-label">Feet:</label>
        <input
          className="height-feet-input"
          type="number"
          placeholder="Feet"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
          onKeyDown={handleKeyDown}
          name="height-feet"
          id="height-feet-input"
        />
      </div>
      <div className="input-container">
        <label className="input-label">Inches:</label>
        <input
          className="height-inches-input"
          type="number"
          placeholder="Inches"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
          onKeyDown={handleKeyDown}
          name="height-inches"
          id="height-inches-input"
        />
      </div>
      <h2 className="input-header">Enter your weight:</h2>
      <div className="input-container">
        <label className="input-label">Pounds:</label>
        <input
          className="weight-pounds-input"
          type="number"
          placeholder="Pounds"
          value={pounds}
          onChange={(e) => setPounds(e.target.value)}
          onKeyDown={handleKeyDown}
          name="weight-pounds"
          id="weight-pounds-input"
        />
      </div>
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi !== null && (
        <div className="bmi-result">
          <h2>BMI Result:</h2>
          <p>{bmi.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
