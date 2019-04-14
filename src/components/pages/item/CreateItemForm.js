import React from "react";
import ValidationError from "../../helpers/ValidationError";
import useForm from "../../hooks/useForm";

const validate = values => {
  let validationErrors = {};

  if (!values.itemName) {
    validationErrors.itemName = <ValidationError />;
  }

  if (!values.category) {
    validationErrors.category = <ValidationError />;
  }

  if (!values.amount) {
    validationErrors.amount = <ValidationError />;
  }

  return validationErrors;
};

const CreateItemForm = ({
  responseErrors,
  itemCategories,
  itemAmounts,
  itemLocations,
  submit
}) => {
  const { values, validationErrors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Create Item</h2>
        <button type="submit" className="btn btn-success">
          Create Item
        </button>
      </div>
      <hr />

      <div className="form-group">
        <label htmlFor="">
          Name <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          className={`form-control ${validationErrors.itemName && "invalid"}`}
          placeholder="(e.g. Apple, Oats)"
          value={values.itemName || ""}
          onChange={handleChange}
          name="itemName"
        />
      </div>
      {validationErrors.itemName && (
        <p className="help text-danger">{validationErrors.itemName}</p>
      )}

      <div className="form-group">
        <label htmlFor="">
          Item Category <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <select
          className={`form-control ${validationErrors.category && "invalid"}`}
          value={values.category || ""}
          onChange={handleChange}
          name="category"
        >
          <option value="">-- Select a category --</option>
          {itemCategories.length > 0 &&
            itemCategories.map((category, index) => {
              return (
                <option value={category.id} key={index}>
                  {category.name}
                </option>
              );
            })}
        </select>
      </div>
      {validationErrors.category && (
        <p className="help text-danger">{validationErrors.category}</p>
      )}

      <div className="form-group">
        <label htmlFor="">
          Default Item Amount
          <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <select
          name="amount"
          id=""
          className={`form-control ${validationErrors.amount && "invalid"}`}
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
      {validationErrors.amount && (
        <p className="help text-danger">{validationErrors.amount}</p>
      )}

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
