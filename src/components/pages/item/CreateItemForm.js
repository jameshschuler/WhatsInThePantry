import React, { useState } from "react";
import api from "../../../api";
import useForm from "../../hooks/useForm";
import parseErrors from "../../utils/parseErrors";

const validate = values => {
  let errors = {};

  if (!values.itemName) {
    errors.itemName = "Name is required";
  }

  if (!values.category) {
    errors.category = "Item Category is required";
  }

  if (!values.amount) {
    errors.amount = "Item Amount is required";
  }

  return errors;
};

const CreateItemForm = ({
  responseErrors,
  itemCategories,
  itemAmounts,
  itemLocations
}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => submit(),
    validate
  );

  const [parsedErrors, setParsedErrors] = useState(null);

  const submit = async () => {
    const response = await api.items.create(values);
    if (errors) {
      setParsedErrors(parseErrors(response));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Create Item</h2>
        <button type="submit" className="btn btn-success">
          Create Item
        </button>
      </div>
      <hr />
      {parsedErrors ? (
        <div className="alert alert-danger">
          <strong className="mr-2">{parsedErrors.message || "Error!"}</strong>
          {/* <div className="d-flex flex-column">
            {submitErrors.errors.map((error, index) => {
              return (
                <>
                  {error.messages.map((message, index) => {
                    return <span key={index}>{message}</span>;
                  })}
                </>
              );
            })}
          </div> */}
        </div>
      ) : null}

      <div className="form-group">
        <label htmlFor="">
          Name <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          className={`form-control ${errors.itemName && "invalid"}`}
          placeholder="(e.g. Apple, Oats)"
          value={values.itemName || ""}
          onChange={handleChange}
          name="itemName"
        />
      </div>
      {errors.itemName && <p className="help text-danger">{errors.itemName}</p>}

      <div className="form-group">
        <label htmlFor="">
          Item Category <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <select
          className={`form-control ${errors.category && "invalid"}`}
          value={values.category || ""}
          onChange={handleChange}
          name="category"
        >
          <option value="">-- Select a category --</option>
          {itemCategories &&
            itemCategories.map((category, index) => {
              return (
                <option value={category.id} key={index}>
                  {category.name}
                </option>
              );
            })}
        </select>
      </div>
      {errors.category && <p className="help text-danger">{errors.category}</p>}

      <div className="form-group">
        <label htmlFor="">
          Default Item Amount
          <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <select
          name="amount"
          id=""
          className={`form-control ${errors.amount && "invalid"}`}
          value={values.amount || ""}
          onChange={handleChange}
        >
          <option value="">-- Select a default amount --</option>
          {itemAmounts &&
            itemAmounts.map((amount, index) => {
              return (
                <option value={amount.id} key={index}>
                  {amount.name}
                </option>
              );
            })}
        </select>
      </div>
      {errors.amount && <p className="help text-danger">{errors.amount}</p>}

      <div className="form-group">
        <label htmlFor="">Default Item Location</label>
        <select
          name="location"
          id=""
          className="form-control"
          value={values.location || ""}
          onChange={handleChange}
        >
          <option value="">-- Select a default location --</option>
          {itemLocations &&
            itemLocations.map((location, index) => {
              return (
                <option value={location.id} key={index}>
                  {location.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          className="form-control"
          value={values.description || ""}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CreateItemForm;
