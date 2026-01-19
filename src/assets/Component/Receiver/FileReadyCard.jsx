import React from 'react';
import './FileReadyCard.css';

function FileReadyCard() {
return (<> 
<div className="fileready-container"> 

<div className="file-ready-card">


<h2>File Ready for Download</h2>

<div className="file-info">
<div><span>File Name:</span> Project_Proposal_v2.pdf</div>
<div><span>Size:</span> 4.5 MB</div>
<div><span>Upload Time:</span> 15 mins ago</div>
</div>

</div>
<div className="downloaditem"><button className="primary">⬇ Download File</button>


<p className="note">File will be deleted automatically after 10 minutes.</p> </div>
</div>

</>
);
}
export default FileReadyCard;