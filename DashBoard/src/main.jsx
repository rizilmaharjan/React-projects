import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ColorContext } from "./context/ColorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorContext>
  </React.StrictMode>
);
