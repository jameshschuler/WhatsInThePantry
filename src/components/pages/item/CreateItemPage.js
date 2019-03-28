import React from "react";
import useForm from "../../hooks/useForm";

const validate = values => {
  let errors = {};

  if (!values.itemName) {
    errors.itemName = "Name is required";
  }

  return errors;
};

const CreateItemPage = () => {
  const submit = () => {
    console.log(values);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    () => submit(),
    validate
  );

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit}>
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
            className={`form-control ${errors.itemName && "invalid"}`}
            placeholder="Apple, Oats"
            value={values.itemName || ""}
            onChange={handleChange}
            name="itemName"
          />
        </div>
        {errors.itemName && (
          <p className="help text-danger">{errors.itemName}</p>
        )}

        <div className="form-group">
          <label htmlFor="">
            Item Category <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          <select
            className="form-control"
            value={values.category}
            onChange={handleChange}
            name="category"
          >
            <option value="1">Test</option>
            <option value="2">Test 1</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">
            Default Item Amount
            <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          <select
            name="amount"
            id=""
            className="form-control"
            value={values.amount}
            onChange={handleChange}
          >
            <option>Test</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Default Item Location</label>
          <select
            name="location"
            id=""
            className="form-control"
            value={values.location || "1"}
            onChange={handleChange}
          >
            <option value="1">Test</option>
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
    </div>
  );
};

export default CreateItemPage;
