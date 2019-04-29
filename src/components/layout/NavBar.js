import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isAuthenticated }) => {
  return (
    isAuthenticated && (
      <nav className="navbar fixed-bottom navbar-dark">
        <ul className="navbar-nav flex-row justify-content-around w-100">
          <li className="nav-item">
            <NavLink exact to="/dashboard" className="navbar-item">
              <i className="fas fa-home fa-fw" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/pantries" className="navbar-item">
              <i className="fas fa-carrot fa-fw" />
              <span>Pantries</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/items" className="navbar-item">
              <i className="fas fa-carrot fa-fw" />
              <span>Items</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  );
};

export default NavBar;
