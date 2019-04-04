import React from "react";

const ErrorAlert = ({ errors }) => {
  return errors ? (
    <div className="alert alert-danger d-flex flex-column">
      <strong>Error!</strong>
      {errors.map((error, index) => {
        return <span key={index}>{error}</span>;
      })}
    </div>
  ) : null;
};

export default ErrorAlert;
