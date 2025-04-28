import React from "react";
import ReactDOM from "react-dom";   // ✅ only 'react-dom' not 'react-dom/client'
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
