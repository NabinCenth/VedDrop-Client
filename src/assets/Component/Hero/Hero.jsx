import React, { useState, useRef,useEffect } from 'react';
import './Hero.css';
import Countdown from '../Hero/Countdown.jsx';

function Hero() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pin, setPin] = useState('');
  const [copied, setCopied] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
const handleUpload = async () => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  console.log("Uploading file:", formData.get("file"));

  try {
    const res = await fetch("https://veddrop-server.onrender.com/upload", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    console.log("Upload successful:", data.pin);
    setPin(data.pin);
    setIsUploading(true);
  } catch (err) {
    console.error("Upload failed:", err);
  }
};

  // Copy PIN logic
  async function handleCopy(e) {
    e.stopPropagation(); // Prevent opening file selector when clicking copy
    try {
      await navigator.clipboard.writeText(pin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  }

  // Handle Drag Over (Required for Drop to work)
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!file) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (file) return; 

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      console.log("File dropped successfully:", droppedFile);
    }
  };

  // Handle file selection via input
  const handleFileChange = (e) => {
    
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile.name);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <h1>SHARE FILES SECURELY <br /><span>WITH A PIN</span></h1>
          <p>Upload a file and get a temporary PIN. No signup.<br />No public links.</p>
      <button 
  className="upload-btn" 
  onClick={handleUpload} 
  disabled={isUploading}
>
  {isUploading ? "Uploaded" : "Upload File"}
</button>
          <div className="file-types">
            <span>PDF</span><span>Images</span><span>ZIP</span>
          </div>
        </div>

        {/* Right Side / Drop Zone */}
        <div className="hero-right"> 
        <div 
          className={`pin-card ${isDragging ? 'dragging' : ''}`} 
         onClick={() => {
  if (!file) openFileSelector();
}}
          
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ border: isDragging ? '2px solid transparent' :'2px dashed #007bff'  }}
        >
     <p className="drag-text" >
  {file ? (
    <>
      Selected: {file.name}
      <br />
      Size:{" "}
      {file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(2)} KB`
        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`}
    </>
  ) : (
    "Drag & drop file here"
  )}
</p>


          <div className={`pin-code ${pin ? 'pulse' : ''}`}>{pin}</div>

       
          {pin?<><Countdown initialMinutes={10} /><button className="copy-btn" onClick={handleCopy} >
            {copied ? "Copied" : "Copy"}
          </button> </>:null}


          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
          
          
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;