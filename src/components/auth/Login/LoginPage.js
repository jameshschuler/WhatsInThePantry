import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div id="login-page" className="page">
      <h1 className="text-center">Sign In</h1>

      <LoginForm />

      <p>
        Don't have an account?
        <Link to="/register" className="ml-2">
          Register!
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
