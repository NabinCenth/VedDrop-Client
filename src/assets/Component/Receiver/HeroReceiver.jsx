import { useState } from "react";
import "./HeroReceiver.css";
import PinEntryCard from "./PinEntryCard.jsx";
import PinErrorCard from "./PinErrorCard.jsx";
import FileReadyCard from "./FileReadyCard.jsx";

export default function HeroReceiver() {
const [pin, setPin] = useState("");

if (pin){
    console.log("PIN in HeroReceiver:", pin);
}
return (
<div className="page">
<div className="cards">
<PinEntryCard pin={pin} setPin={setPin} />
{/* <PinErrorCard />
<FileReadyCard /> */}
</div>
</div>
);
}

