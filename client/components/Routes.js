import React from "react";
import { Switch, Route } from "react-router-dom";
import { About, SolarSystem, Homepage, Projects, Thesis } from "../index";

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
      <Route path="/thesis">
        <Thesis />
      </Route>
    </>
  );
};
