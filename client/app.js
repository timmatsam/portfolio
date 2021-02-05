//top level js file that renders the main component
import ReactDOM from "react-dom";
import React from "react";
import { Main, Box, SolarSystem, LoadingScreen, Routes } from "./index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("app")
);
