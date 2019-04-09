import React from "react";
import useForm from "../../../hooks/useForm";

const validate = values => {
  let errors = {};

  //   if (!values.name) {
  //     errors.name = "Pantry name is required";
  //   }

  return errors;
};

const CreatePantryItemForm = ({ submit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  // TODO: track when user has selected an item from the autocomplete
  //TODO: and send request to get other item data
  // TODO: use hooks to keep track of disabled state
  // TODO: use effect to enable fields after user enters a value for item id

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
          value={values.itemId || ""}
          onChange={handleChange}
          name="itemId"
        />
      </div>
      {errors.itemId && <p className="help text-danger">{errors.itemId}</p>}

      <div className="form-group">
        <label htmlFor="">
          Price <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          disabled={values.itemId === "" ? false : true}
          className={`form-control ${errors.price && "invalid"}`}
          value={values.price || ""}
          onChange={handleChange}
          name="price"
        />
      </div>
      {errors.price && <p className="help text-danger">{errors.price}</p>}

      <div className="form-group">
        <label htmlFor="">
          Unit <i className="fas fa-xs fa-fw fa-asterisk required" />
        </label>
        <input
          type="text"
          disabled={values.itemId === "" ? false : true}
          className={`form-control ${errors.unit && "invalid"}`}
          value={values.unit || ""}
          onChange={handleChange}
          name="price"
        />
      </div>
      {errors.unit && <p className="help text-danger">{errors.unit}</p>}
    </form>
  );
};

export default CreatePantryItemForm;
