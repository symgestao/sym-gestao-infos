import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./pages/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);
