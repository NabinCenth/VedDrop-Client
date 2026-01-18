import PinInput from "./PinInput";
import "./PinEntryCard.css";

function PinEntryCard({setPin}) {
  const handlePinComplete = (pin) => {
    console.log("PIN entered:", pin);
    // here you’ll call your backend: /receive or /verify
    setPin(pin);
  };

  return (
    <div className="pin-card">
      <h2>Enter PIN to Receive File</h2>
      <p className="sub">Enter the secure PIN shared with you.</p>
<div className="input--pin"> 
    <PinInput  length={6} onComplete={handlePinComplete} />
</div>
      

      <button className="primary">Access File</button>
    </div>
  );
}

export default PinEntryCard;
