import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WorkoutContext } from "./context/WorkoutContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <WorkoutContext>
          <App />
        </WorkoutContext>
      </QueryClientProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>
);
