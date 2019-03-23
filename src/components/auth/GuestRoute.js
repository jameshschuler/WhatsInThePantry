import React from "react";
import { Redirect, Route } from "react-router-dom";

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      )
    }
  />
);

export default GuestRoute;
