import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin: 0;
 font-family: "Inter", sans-serif;
}
  `;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
