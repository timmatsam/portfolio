import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav id="navbar">
      <NavLink className="navlink" exact to="/">
        Homepage
      </NavLink>
      <NavLink className="navlink" to="/aboutme">
        About Me
      </NavLink>
      <NavLink className="navlink" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navlink" to="/solarsystem">
        Solar System
      </NavLink>
    </nav>
  );
}

export default HeaderNav;
