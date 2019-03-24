import React from "react";
const Spinner = () => {
  return (
    <div className="spinner-container d-flex justify-content-center">
      <div className="spinner-border spinner-lg" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
