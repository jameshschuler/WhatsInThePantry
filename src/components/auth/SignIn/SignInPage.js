import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  const signin = values => {
    console.log(values);
  };

  return (
    <div className="page row">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Sign in!</h1>

        <SignInForm signin={signin} />

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

export default SignInPage;
