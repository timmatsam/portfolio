import React from "react";
import { NavLink } from "react-router-dom";
export const HeaderNav = () => {
  return (
    <nav id="navbar">
      <NavLink className="navlink" exact to="/">
        Homepage
      </NavLink>
      {/* <NavLink className="navlink" to="/about">
        About
      </NavLink> */}
      <NavLink className="navlink" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navlink" to="/solarsystem">
        Solar System
      </NavLink>
    </nav>
  );
};
