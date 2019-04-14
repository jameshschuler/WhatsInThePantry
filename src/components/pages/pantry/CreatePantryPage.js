import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createPantry } from "../../../store/actions/pantryActions";
import ValidationError from "../../helpers/ValidationError";
import useForm from "../../hooks/useForm";

const validate = values => {
  let validationErrors = {};

  if (!values.name) {
    validationErrors.name = <ValidationError />;
  }

  return validationErrors;
};

const CreatePantryPage = ({ errors, message, isFetching, createPantry }) => {
  const submit = async values => {
    await createPantry(values.name);
  };

  const { values, validationErrors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  return (
    <div className="page">
      <Link to="/pantries">
        <i className="fas fa-fw fa-arrow-left" /> Back to Pantries
      </Link>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
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
            className={`form-control ${validationErrors.name && "invalid"}`}
            value={values.name || ""}
            onChange={handleChange}
            name="name"
          />
        </div>
        {validationErrors.name && (
          <p className="help text-danger">{validationErrors.name}</p>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  const { isFetching, errors, message } = state.global;

  return {
    ...state,
    isFetching,
    errors,
    message
  };
};

export default connect(
  mapStateToProps,
  {
    createPantry
  }
)(CreatePantryPage);
