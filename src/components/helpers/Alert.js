import React from "react";

const Alert = ({ type, header, message }) => {
  return message ? (
    <div className={`alert alert-${type}`}>
      <strong className="mr-2">{header}</strong>
      {message}
    </div>
  ) : null;
};

export default Alert;
