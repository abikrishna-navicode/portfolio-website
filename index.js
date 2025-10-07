import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // <- Make sure it matches App.jsx filename
import "./index.css";      // optional global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
