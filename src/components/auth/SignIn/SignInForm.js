import React from "react";
import useForm from "../../hooks/useForm";

const validate = values => {
  let validationErrors = {};

  if (!values.usernameOrEmail) {
    validationErrors.usernameOrEmail = "Email address or username is required";
  }

  if (!values.password) {
    validationErrors.password = "Password is required";
  }

  return validationErrors;
};

const SignInForm = ({ submit }) => {
  const { values, validationErrors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  return (
    <form id="signin-form" className="form" onSubmit={handleSubmit}>
      <div
        className={`input-group ${validationErrors.usernameOrEmail &&
          "invalid"}`}
      >
        <input
          type="text"
          placeholder="Enter your username or email"
          name="usernameOrEmail"
          value={values.usernameOrEmail || ""}
          onChange={handleChange}
          className="form-control"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-user" />
          </span>
        </div>
      </div>
      {validationErrors.usernameOrEmail && (
        <p className="help text-danger">{validationErrors.usernameOrEmail}</p>
      )}

      <div className={`input-group ${validationErrors.password && "invalid"}`}>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          className="form-control"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-lock" />
          </span>
        </div>
      </div>
      {validationErrors.password && (
        <p className="help text-danger">{validationErrors.password}</p>
      )}

      <button type="submit" className="btn btn-success">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
