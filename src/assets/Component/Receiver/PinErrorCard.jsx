import React from 'react';
import PinInput from "./PinInput";
import "./PinErrorCard.css"; // Keep for error-specific colors

function PinErrorCard({ setPin, errorMessage }) {
  const handlePinComplete = (pin) => {
    console.log("PIN re-entered:", pin);
    setPin(pin);
  };

  return (
    <div className="pin-error-card">
      <div className="pin-content">
        <h2>Enter PIN to Receive File</h2>
        <p className="sub">Enter the secure PIN shared with you.</p>

        <div className="input--pin">
          <PinInput length={6} onComplete={handlePinComplete} />
        </div>

        {/* Logic: Display the error message provided via props or default */}
        <div className="error-text">
          {errorMessage || "Invalid PIN. Please check and try again."}
        </div>
      </div>

      <button className="primary">Access File</button>
    </div>
  );
}

export default PinErrorCard;