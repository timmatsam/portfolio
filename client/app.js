import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderNav, Routes } from "./index";
ReactDOM.render(
  <BrowserRouter>
    <div id="main">
      <HeaderNav />
      <Routes />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
