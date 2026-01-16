import React from 'react'
import './Navbar.css'
import Logo from "../../NewLogo.png";
function Navbar() {
  return (
<> <div className="container"> 
<div className="namelogo">
    <img src={Logo}/>
</div>
<div className="navlinks">
    <div className="sendFiles">Send</div>
    <div className="ReceiveFiles">Receive</div>
</div>
</div>
</>
  )
}

export default Navbar