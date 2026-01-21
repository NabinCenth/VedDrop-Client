import { useState } from "react";
import "./HeroReceiver.css";
import PinEntryCard from "./PinEntryCard.jsx";
import PinErrorCard from "./PinErrorCard.jsx";
import FileReadyCard from "./FileReadyCard.jsx";

export default function HeroReceiver() {
const [pin, setPin] = useState("");
const [isFileReady,setIsFileReady]=useState(false);
const [fileData,setFileData]=useState(null);
 const [errorState, setErrorState] = useState(false);
const handleReceivedata=(data)=>{
    console.log("Data received in HeroReceiver:", data);
    setFileData(data);
    setIsFileReady(true);
}
return (
<div className="page">
{!isFileReady ? (
        <PinEntryCard pin={pin} setPin={setPin} toHandleData={handleReceivedata} 
        errorState={errorState} setErrorState={setErrorState}
        />
      ) : (
        <FileReadyCard fileData={fileData} />
      )}
 {/* <PinErrorCard /> */}
{/* <FileReadyCard /> */}
</div>
);
}

