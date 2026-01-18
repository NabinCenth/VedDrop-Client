import React from 'react';
import './PinErrorCard.css';
function PinErrorCard() {
return (
<div className="pin-error-card">

<h2>Enter PIN to Receive File</h2>
<p className="sub">Enter the secure PIN shared with you.</p>


<div className="pin-row">
{Array.from({ length: 6 }).map((_, i) => (
<input key={i} disabled />
))}
</div>


<div className="error-text">Invalid PIN. Please check and try again.</div>
<div className="error-text">This PIN has expired. Please request a new one.</div>


<button className="primary disabled">Access File</button>
</div>
);
}
export default PinErrorCard;