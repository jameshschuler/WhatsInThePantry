import React from "react";

const LoginForm = () => {
  return (
    <form id="login-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-user" />
          </span>
        </div>
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-lock" />
          </span>
        </div>
      </div>

      <button type="submit" className="mt-2 btn btn-success">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
