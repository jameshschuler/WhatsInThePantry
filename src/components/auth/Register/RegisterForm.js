import React from "react";

const RegisterForm = () => {
  return (
    <form id="register-form">
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
        <label className="font-weight-bold" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="font-weight-bold" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
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
      <div className="form-group">
        <label className="font-weight-bold" htmlFor="confirm-password">
          Confirm Password
        </label>
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
