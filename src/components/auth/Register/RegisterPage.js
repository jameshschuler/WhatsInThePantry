import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="container">
      <div id="register-page" className="page">
        <h1 className="text-center">Sign up!</h1>
        <h5 className="text-center">
          Fill out the form below to create your free account.
        </h5>
        <RegisterForm />

        <p className="page-redirect">
          Already have an account?
          <Link to="/login" className="ml-2">
            Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
