import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="container">
      <div id="login-page" className="page">
        <h1 className="text-center">Sign in!</h1>

        <LoginForm />

        <p className="page-redirect">
          Don't have an account?
          <Link to="/register" className="ml-2">
            Register!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
