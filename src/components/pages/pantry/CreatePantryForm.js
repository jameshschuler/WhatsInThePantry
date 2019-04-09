import React from "react";
import useForm from "../../hooks/useForm";

const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = "Pantry name is required";
  }

  return errors;
};

const CreatePantryForm = ({ responseErrors, submit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Create Pantry</h2>
        <button type="submit" className="btn btn-success">
          Create Pantry
        </button>
      </div>
      <hr />

      <div className="form-group">
        <label htmlFor="">
          Name <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          className={`form-control ${errors.name && "invalid"}`}
          value={values.name || ""}
          onChange={handleChange}
          name="name"
        />
      </div>
      {errors.name && <p className="help text-danger">{errors.name}</p>}
    </form>
  );
};

export default CreatePantryForm;
