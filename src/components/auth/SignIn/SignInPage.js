import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../../store/actions/authActions";
import SignInForm from "./SignInForm";

const SignInPage = ({ signin, isFetching, message, errors, user, history }) => {
  const submit = async values => {
    await signin(values);
  };

  return (
    <div className="page row">
      <div className="col-md-6 offset-md-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-center">Sign in!</h1>
          {isFetching && (
            <div className="spinner-border " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
        {errors && (
          <div className="alert alert-danger my-3" role="alert">
            <strong>{message}</strong> {errors[0]}
          </div>
        )}
        <SignInForm submit={submit} />
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

const mapStateToProps = state => {
  const { isFetching, errors, message, user } = state.auth;

  return {
    ...state,
    isFetching,
    errors,
    message,
    user
  };
};

export default connect(
  mapStateToProps,
  {
    signin
  }
)(SignInPage);
