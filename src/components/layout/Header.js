import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
  return (
    <>
      <div
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        <h1>What's in the Pantry?</h1>
        {isAuthenticated && <h5 className="mr-3">Welcome, {username}!</h5>}
      </div>
      {isAuthenticated && (
        <div id="header-links" className="d-flex justify-content-end mr-3">
          <Link to="/account" className="header-link">
            <i className="fas fa-user-cog fa-fw fa-lg" />
          </Link>
          <a href="!" className="header-link">
            <i className="fas fa-sign-out-alt fa-fw fa-lg ml-2" />
          </a>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    username: state.auth.user !== null ? state.auth.user.username : null
  };
};

export default connect(mapStateToProps)(Header);
