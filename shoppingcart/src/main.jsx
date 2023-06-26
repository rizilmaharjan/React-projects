import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ShopContext from "./context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContext>
      <App />
    </ShopContext>
  </React.StrictMode>
);
