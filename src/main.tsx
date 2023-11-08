import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Garfish from "garfish"; // Error: TS7016
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Garfish.run; // No type inference, no auto completion
