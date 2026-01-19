import React from "react";
import PinInput from "./PinInput";
import "./PinEntryCard.css";

function PinEntryCard({ setPin,toHandleData }) {
  const[pin1,setPin1]=React.useState("");
  const[filereceivedState,setFileReceivedState]=React.useState(false);
  const[receivedFileData,setReceivedFileData]=React.useState(null);
  const handlePinComplete = (pin) => {
    console.log("PIN entered:", pin);
    setPin(pin);
    setPin1(pin);
  };
  if (pin1){
    console.log("PIN in PinEntryCard:", pin1);
  }
  // Access file logic
const handleAcess= async ()=>{
  console.log("Accessing file with PIN:", pin1);
  try{
const res = await fetch(`http://localhost:300/upload/${pin1}`,{
  method:"GET",
});
const data = await res.json();
setFileReceivedState(true);
console.log("File access response:", data);
setReceivedFileData(data);
toHandleData(data);
  }catch(err){
    console.error("Error accessing file:", err);
  }
};
  return (
    <div className="pin-card">
      <div className="pin-content">
        <h2>Enter PIN to Receive File</h2>
        <p className="sub">Enter the secure PIN shared with you.</p>

        <div className="input--pin">
          <PinInput length={6} onComplete={handlePinComplete} />
        </div>
      </div>

      <button className="primary" onClick={handleAcess}>Access File</button>
    </div>
  );
}

export default PinEntryCard;
