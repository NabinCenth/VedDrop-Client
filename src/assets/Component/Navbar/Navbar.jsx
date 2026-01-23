import React from 'react'
import './Navbar.css'
import Logo from "../../NewLogo.png"; 

function Navbar({ setReceiving }) {
    const [isSopened, setIsSopened] = React.useState(true);

    const handleReceive = () => {
        setIsSopened(false);
        setReceiving(true);
    }

    const handleSend = () => {
        setIsSopened(true);
        setReceiving(false);
    }

    return (
        <header>
            <div className="container">
                <div className="namelogo">
                    <img 
                        src={Logo} 
                        alt="VedDrop - Secure Temporary File Sharing" // Fixed SEO & Accessibility issue
                        fetchPriority="high" // Tells the browser this is the most important image
                    />
                </div>
                
                {/* Wrapped navigation in <nav> for screen readers */}
                <nav className="file-action" aria-label="File actions">
                    <button 
                        type="button" // Use buttons instead of divs for keyboard accessibility
                        className={`sendFiles ${isSopened ? "active" : "inactive"}`} 
                        onClick={handleSend}
                    >
                        Send
                    </button>

                    <button 
                        type="button"
                        className={`ReceiveFiles ${!isSopened ? "active" : "inactive"}`} 
                        onClick={handleReceive}
                    >
                        Receive
                    </button> 
                </nav> 
            </div> 
        </header>
    )
}

export default Navbar