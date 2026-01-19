import React from 'react';
import './FileReadyCard.css';

function FileReadyCard({ fileData }) {
const handleDownload = async (e) => {
  e.preventDefault();

  try {
    // 1. Fetch the data from the URL
    const response = await fetch(fileData.url);
    
    // 2. Convert the response into a Blob
    const blob = await response.blob();

    // 3. Create a local URL for that Blob
    const localUrl = window.URL.createObjectURL(blob);

    // 4. Create the link and trigger the download
    const link = document.createElement("a");
    link.href = localUrl;
    link.download = fileData.filename || "download";
    
    document.body.appendChild(link);
    link.click();

    // 5. Cleanup: remove the link and revoke the local URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(localUrl);
  } catch (error) {
    console.error("Download failed:", error);
    // Fallback: try opening in a new tab if fetch fails (e.g. CORS issues)
    window.open(fileData.url, "_blank");
  }
};

  return (
    <div className="fileready-container">
      <div className="file-ready-card">
        <h2>File Ready for Download</h2>

        <div className="file-info">
          <div>
            <span>File Name:</span> {fileData.filename}
          </div>
          <div>
            <span>Size:</span>{' '}
            {fileData.size < 1024 * 1024
              ? `${(fileData.size / 1024).toFixed(2)} KB`
              : `${(fileData.size / (1024 * 1024)).toFixed(2)} MB`}
          </div>
        </div>
      </div>

      <div className="downloaditem">
        <button className="primary" onClick={handleDownload}>
          ⬇ Download File
        </button>
        <p className="note">
          File will be deleted automatically after 10 minutes.
        </p>
      </div>
    </div>
  );
}

export default FileReadyCard;
