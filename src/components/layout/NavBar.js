import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="bottom-navbar">
      <NavLink exact to="/" className="navbar-item">
        <i className="fas fa-home fa-fw" />
        <span>Home</span>
      </NavLink>

      <NavLink exact to="/my-pantry" className="navbar-item">
        <i className="fas fa-carrot fa-fw" />
        <span>My Pantry</span>
      </NavLink>

      <NavLink exact to="/add-item" className="navbar-item">
        <i className="fas fa-plus fa-fw" />
        <span>Add Item</span>
      </NavLink>

      <NavLink exact to="/usage" className="navbar-item">
        <i className="fas fa-chart-line fa-fw" />
        <span>Usage</span>
      </NavLink>
    </div>
  );
};

export default NavBar;
