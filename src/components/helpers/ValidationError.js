import React from "react";

const ValidationError = ({ message }) => {
  return (
    <span>
      <i className="fas fa-exclamation-triangle mr-2" /> {message || "Required"}
    </span>
  );
};

export default ValidationError;
