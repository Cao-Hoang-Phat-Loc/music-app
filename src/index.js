import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
ReactDOM.render(
  <MusicPlayerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MusicPlayerProvider>,
  document.getElementById("root")
);
