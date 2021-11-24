import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import { App } from "./App";
import ImageState from "./state/ImageState";

ReactDOM.render(
  <React.StrictMode>
    <ImageState.Provider>
      <App />
    </ImageState.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
