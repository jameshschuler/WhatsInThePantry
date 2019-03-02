import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isAuthenticated }) => {
  return (
    isAuthenticated && (
      <nav className="navbar fixed-bottom navbar-dark">
        <ul className="navbar-nav flex-row justify-content-around w-100">
          <li className="nav-item">
            <NavLink exact to="/" className="navbar-item">
              <i className="fas fa-home fa-fw" />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/my-pantry" className="navbar-item">
              <i className="fas fa-carrot fa-fw" />
              <span>My Pantry</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/item" className="navbar-item">
              <i className="fas fa-carrot fa-fw" />
              <span>Items</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/shopping-list" className="navbar-item">
              <i className="fas fa-cart-arrow-down fa-fw" />
              <span>Shopping Lists</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/usage" className="navbar-item">
              <i className="fas fa-chart-line fa-fw" />
              <span>Usage</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  );
};

export default NavBar;
