import React from "react";
import { Switch, Route } from "react-router-dom";
import { SolarSystem, LoadingScreen, NavBar, Routes, Footer } from "../index";

export default () => {
  return (
    <div id="main">
      <NavBar />
      <Routes />
    </div>
  );
};
//require the hooks - if component has not mounted yet - load the loading screen
