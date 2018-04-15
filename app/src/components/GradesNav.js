import React from "react";
import { NavLink } from "react-router-dom";
import "./GradesNav.css";

const GradesNav = () => {
  return (
    <div className="GradesNav-container">
      <NavLink activeClassName="GradesNav-button-active" to="/Sixth" className="GradesNav-link">
        <div className="GradesNav-button">6TH</div>
      </NavLink>
      <NavLink activeClassName="GradesNav-button-active" to="/Seventh" className="GradesNav-link">
        <div className="GradesNav-button">7TH</div>
      </NavLink>
      <NavLink activeClassName="GradesNav-button-active" to="/Eighth" className="GradesNav-link">
        <div className="GradesNav-button">8TH</div>
      </NavLink>
    </div>
  );
};

export default GradesNav;
