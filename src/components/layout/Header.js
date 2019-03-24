import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
  return (
    <div
      id="header"
      className="d-flex justify-content-between align-items-center"
    >
      <h1>What's in the Pantry?</h1>
      {isAuthenticated && (
        <div className="d-flex justify-content-between align-items-center">
          <h6>Welcome, {username}!</h6>
          <div id="header-links" className="ml-3">
            <Link to="/account" className="header-link">
              <i className="fas fa-user-cog fa-fw fa-lg" />
            </Link>
            <a href="!" className="header-link">
              <i className="fas fa-sign-out-alt fa-fw fa-lg ml-2" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.auth.user.username
  };
};

export default connect(mapStateToProps)(Header);
