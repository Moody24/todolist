import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import "./index.css";

// Log to confirm execution
console.log("index.jsx is executing");

// Check if the root element exists
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("Root element found:", rootElement);
} else {
  console.error("Root element not found!");
}

// Create the root and render the App
console.log("Rendering the App component");
const root = ReactDOM.createRoot(rootElement); // Updated to use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
