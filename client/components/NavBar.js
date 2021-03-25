import React from "react";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <nav id="navbar">
      <NavLink className="navlink" exact to="/">
        Homepage
      </NavLink>
      <NavLink className="navlink" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navlink" to="/solarsystem">
        Solar System
      </NavLink>
      <NavLink className="navlink" to="/thesis">
        Thesis
      </NavLink>
    </nav>
  );
};
