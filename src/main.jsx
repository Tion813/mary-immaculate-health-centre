import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { hospitalStructuredData } from "./data/structuredData";

const structuredDataScript = document.createElement("script");

structuredDataScript.type = "application/ld+json";

structuredDataScript.textContent = JSON.stringify(
  hospitalStructuredData
);

document.head.appendChild(structuredDataScript);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);