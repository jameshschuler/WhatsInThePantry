import React from "react";

const LoginForm = () => {
  return (
    <form id="login-form">
      <div className="form-group">
        <label className="font-weight-bold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="font-weight-bold" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
        />
      </div>
      <button type="submit" className="mt-2 btn btn-success">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
