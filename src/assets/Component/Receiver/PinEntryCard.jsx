import React from "react";
import PinInput from "./PinInput";
import "./PinEntryCard.css";
const API = import.meta.env.VITE_API_BASE_URL;

function PinEntryCard({ setPin,toHandleData, errorState, setErrorState  }) {
  const[pin1,setPin1]=React.useState("");
  const[filereceivedState,setFileReceivedState]=React.useState(false);
  const[receivedFileData,setReceivedFileData]=React.useState(null);
  const handlePinComplete = (pin) => {
  setPin1(pin); // This now updates the value passed into PinInput
    setPin(pin);
    setErrorState(false);
  
};
  if (pin1){
    console.log("PIN in PinEntryCard:", pin1);
  }
  // Access file logic
const handleAccess = async () => {
  if (!pin1) {
    console.log("No PIN entered");
    setErrorState(true);
    return;
  }
  console.log("Accessing file with PIN:", pin1);
  try {
    const res = await fetch(`${API}/upload/${pin1}`, { method: "GET" });
    const data = await res.json();

    // Check if response is OK
    if (!res.ok) {
      // Server returned error
      console.error("Server error:", data.error || "Unknown error");
      setErrorState(true);        // show error
      setFileReceivedState(false); // make sure file state is false
    setPin1("");
      return;                     // stop further execution
    }

    // Success: only update state now
    setFileReceivedState(true);
    setReceivedFileData(data);
    toHandleData(data);
    setErrorState(false);         // reset error if previously set
    console.log("File access response:", data);

  } catch (err) {
    console.error("Network or fetch error:", err);
    setErrorState(true);
    setFileReceivedState(false);

  }
};

  return (
     <div className={`pin-card ${errorState ? "error" : ""}`}>
      <div className="pin-content">
        <h2>Enter PIN to Receive File</h2>
        <p className="sub">Enter the secure PIN shared with you.</p>
        {errorState && <p className="pin-error-message">Invalid Pin. Please try again later</p>}

        <div className="input--pin">
          <PinInput  length={6} onComplete={handlePinComplete} />
        </div>
      </div>

      <button className="primary" onClick={handleAccess}>
        Access File
      </button>
    </div>
  );
}

export default PinEntryCard;
