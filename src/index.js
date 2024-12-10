import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

const apiKey = process.env.REACT_APP_TUBE_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <App apiKey={apiKey} />
  </React.StrictMode>,
  document.getElementById("root")
);
