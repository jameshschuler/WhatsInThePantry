import React, { useEffect, useState } from "react";
import validator from "validator";
import useForm from "../../../hooks/useForm";

const validate = values => {
  let errors = {};

  if (!values.itemId) {
    errors.itemId = (
      <span>
        <i className="fas fa-exclamation-triangle mr-2" /> Required
      </span>
    );
  } else {
    if (!values.price) {
      errors.price = (
        <span>
          <i className="fas fa-exclamation-triangle mr-2" /> Required
        </span>
      );
    } else {
      if (!validator.isCurrency(values.price)) {
        errors.price = (
          <span>
            <i className="fas fa-exclamation-triangle mr-2" /> Price must be in
            a currency format
          </span>
        );
      }
    }

    if (!values.unit) {
      errors.unit = (
        <span>
          <i className="fas fa-exclamation-triangle mr-2" /> Required
        </span>
      );
    }

    if (!values.amount) {
      errors.amount = (
        <span>
          <i className="fas fa-exclamation-triangle mr-2" /> Required
        </span>
      );
    }
  }
  return errors;
};

const CreatePantryItemForm = ({
  submit,
  itemsAutocomplete,
  itemAmounts,
  itemLocations
}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (values.itemId) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Create Pantry Item</h2>
        <button type="submit" className="btn btn-success">
          Create Pantry Item
        </button>
      </div>
      <hr />

      <div className="form-group">
        <label htmlFor="">
          Item <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          className={`form-control ${errors.itemId && "invalid"}`}
          placeholder="Start typing to select item"
          value={values.itemId || ""}
          onChange={handleChange}
          name="itemId"
          id="itemId"
        />
      </div>
      {errors.itemId && <p className="help text-danger">{errors.itemId}</p>}

      <div className="form-group">
        <label htmlFor="">
          Price <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <div className={`input-group ${errors.price && "invalid"}`}>
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-dollar-sign" />
            </span>
          </div>
          <input
            type="text"
            disabled={disabled}
            className="form-control"
            value={values.price || ""}
            onChange={handleChange}
            name="price"
          />
        </div>
      </div>
      {errors.price && <p className="help text-danger">{errors.price}</p>}

      <div className="form-group">
        <label htmlFor="">
          Unit <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          disabled={disabled}
          className={`form-control ${errors.unit && "invalid"}`}
          value={values.unit || ""}
          onChange={handleChange}
          name="unit"
        />
      </div>
      {errors.unit && <p className="help text-danger">{errors.unit}</p>}

      <div className="form-group">
        <label htmlFor="">
          Item Amount
          <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <select
          name="amount"
          id="amount"
          disabled={disabled}
          className={`form-control ${errors.amount && "invalid"}`}
          value={values.amount || ""}
          onChange={handleChange}
        >
          <option value="">-- Select amount --</option>
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
        <label htmlFor="">Item Location</label>
        <select
          name="location"
          id="location"
          disabled={disabled}
          className="form-control"
          value={values.location || ""}
          onChange={handleChange}
        >
          <option value="">-- Select location --</option>
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
      {errors.location && <p className="help text-danger">{errors.location}</p>}
    </form>
  );
};

export default CreatePantryItemForm;
