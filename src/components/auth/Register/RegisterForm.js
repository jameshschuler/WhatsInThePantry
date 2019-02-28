import React from "react";

const RegisterForm = () => {
  return (
    <form id="register-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
        />
        <small className="form-text text-muted">
          Your password must be at least 12 characters long, contain letters and
          numbers, and must not contain spaces or emoji.
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm-password"
          className="form-control"
        />
      </div>
      <button type="submit" className="mt-2 btn btn-success">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
