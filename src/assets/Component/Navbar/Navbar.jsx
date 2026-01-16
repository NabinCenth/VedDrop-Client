import React from 'react'
import './Navbar.css'
import Logo from "../../NewLogo.png";
function Navbar() {
    const[isSopened,setIsSopened]=React.useState(true);
    const handleReceive=()=>{
        setIsSopened(false);
    }
    const handleSend=()=>{
        setIsSopened(true);
    }
  return (
<> <div className="container"> 
<div className="namelogo">
    <img src={Logo}/>
</div>
<div className="file-action">
<div 
      className={`sendFiles ${isSopened ? "active" : "inactive"}`} 
      onClick={handleSend}
    >
      Send
    </div>

    <div 
      className={`ReceiveFiles ${!isSopened ? "active" : "inactive"}`} 
      onClick={handleReceive}
    >
      Receive
    </div> </div> </div>

</>
  )
}

export default Navbar