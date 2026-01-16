import React from 'react'
import { useState } from 'react';
import './Hero.css'
function Hero() {
      const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [pin,setPin]=useState('5B7Z9R');
    const[copied,setCopied]=useState(false); 
 const fileInputRef = React.useRef(null);
 //To copy pin to clipboard
   async function myFunction(e) {

    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(pin);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000); // reset text
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  }
  //Hande file drop
const handleDrop = (e) => {
  e.preventDefault();
    e.stopPropagation();
  console.log("File dropped");
  setIsDragging(false); // drop ends dragging

  if (file) return; // prevent selecting multiple files

  const droppedFile = e.dataTransfer.files[0];
  if (droppedFile) {
    setFile(droppedFile);
    console.log("Dropped file:", droppedFile); // log the file directly
  }
};
const handleoverdrop =(e)=>{
    e.preventDefault();
    console.log("File dropped");
}

 const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  const openFileSelector= (e)=>{
    e.stopPropagation();
    fileInputRef.current.click();
  }

  return (
 <>
    <section className="hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">
          <h1>
            SHARE FILES SECURELY <br />
            <span>WITH A PIN</span>
          </h1>

          <p>
            Upload a file and get a temporary PIN. No signup.
            <br />No public links.
          </p>

          <button className="upload-btn">Upload File</button>

          <div className="file-types">
            <span>PDF</span>
            <span>Images</span>
            <span>ZIP</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="pin-card" 
        onClick={openFileSelector}
  onDragEnter={(e) => {e.preventDefault();
    e.stopPropagation();
  }}   
        onDragOver={
            (e) => {
          e.preventDefault();
          e.stopPropagation()
          if (!file) setIsDragging(true);
              }}
        
        onDragLeave={() => {setIsDragging(false);
e.preventDefault();
          e.stopPropagation()
        }}
        onDrop={handleDrop}
        >
          <p className="drag-text">Drag & drop file here</p>

          <div className="pin-code">5B7Z9R</div>

          <p className="expiry">Expires in: 29:59</p>
 <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
            <button className="copy-btn" onClick={myFunction}>
        {copied ? "Copied" : "Copy"}
      </button>
        </div>

      </div>
    </section>
 </>
  )
}

export default Hero