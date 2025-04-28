import React from 'react';

function Tabs() {
  return (
    <div>
      <div className="tabs">
        <button id="Home-tab" className="tab">Home</button>
        <button id="About-tab" className="tab">About</button>
        <button id="Features-tab" className="tab">Features</button>
      </div>
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
}

export default Tabs;
