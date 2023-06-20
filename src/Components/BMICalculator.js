import React, { useState } from "react";

export default function BMICalculator() {
  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInches, setHeightInches] = useState(0);
  const [weightPounds, setWeightPounds] = useState(0);

  const calculateBMI = () => {
    const totalHeightInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const weightInKg = parseInt(weightPounds) * 0.453592; // Convert pounds to kilograms
    const heightInMeters = totalHeightInches * 0.0254; // Convert inches to meters
  
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    // Perform any additional logic or actions with the calculated BMI value
    console.log("BMI:", bmi);
  };
  
  
  return (
      <div className="bmi-form">
          {/* Feet Section */}
      <h2 className="input-header">Enter your height:</h2>
            <div className="input-container">
                <label className="input-label">Feet:</label>
                <input
                className="height-feet-input"
                type="number"
                placeholder="Feet"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                name="height-feet"
                id="height-feet-input"
                />
          </div>
          {/* Inches Section */}
      <div className="input-container">
            <label className="input-label">Inches:</label>
            <input
                className="height-inches-input"
                type="number"
                placeholder="Inches"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                name="height-inches"
                id="height-inches-input"
            />
          </div>
          {/* Weight Section */}
      <h2 className="input-header">Enter your weight:</h2>
      <div className="input-container">
            <label className="input-label">Pounds:</label>
            <input
                className="weight-pounds-input"
                type="number"
                placeholder="Pounds"
                value={weightPounds}
                onChange={(e) => setWeightPounds(e.target.value)}
                name="weight-pounds"
                id="weight-pounds-input"
            />
        </div>
          
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate BMI
        </button>
          
    </div>
  );
}
