import React from "react";
import Calculator from "./Components/calculator.js";
import "./index.css";
import ReactDOM from 'react-dom/client';
// Render the calculator component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);