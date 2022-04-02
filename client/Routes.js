import React from "react";
import { Route } from "react-router-dom";
import { SolarSystem, Homepage, Projects } from "./index";

export default () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/solarsystem">
        <SolarSystem />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </>
  );
};
