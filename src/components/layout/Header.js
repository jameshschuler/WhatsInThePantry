import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <div id="header">
      <h1>What's in the Pantry?</h1>
      <div id="header-links">
        <Link to="/account" className="header-link">
          <i className="fas fa-user-cog fa-fw fa-lg" />
        </Link>
        <a href="!" className="header-link">
          <i className="fas fa-sign-out-alt fa-fw fa-lg" />
        </a>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <h1 className="pt-4">What's in the Pantry?</h1>
    </div>
  );
};

export default Header;
