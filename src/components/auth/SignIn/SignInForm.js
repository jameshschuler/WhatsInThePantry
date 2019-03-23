import React from "react";
import useForm from "../../hooks/useForm";

const validate = values => {
  let errors = {};

  if (!values.usernameOrEmail) {
    errors.usernameOrEmail = "Email address or username is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

const SignInForm = ({ signin }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => signin(values),
    validate
  );

  return (
    <form id="signin-form" className="form" onSubmit={handleSubmit}>
      <div className={`input-group ${errors.usernameOrEmail && "invalid"}`}>
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
      {errors.usernameOrEmail && (
        <p className="help text-danger">{errors.usernameOrEmail}</p>
      )}

      <div className={`input-group ${errors.password && "invalid"}`}>
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
      {errors.password && <p className="help text-danger">{errors.password}</p>}

      <button type="submit" className="btn btn-success">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
