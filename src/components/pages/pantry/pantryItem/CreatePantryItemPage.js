import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import {
  getItemAmounts,
  getItemLocations,
  getItemsAutocomplete
} from "../../../../store/actions/itemActions";
import { createPantryItem } from "../../../../store/actions/pantryActions";
import Autocomplete from "../../../helpers/Autocomplete";
import ValidationError from "../../../helpers/ValidationError";
import useForm from "../../../hooks/useForm";

const validate = values => {
  let validationErrors = {};

  if (!values.itemId) {
    validationErrors.itemId = <ValidationError />;
  } else {
    if (!values.price) {
      validationErrors.price = <ValidationError />;
    } else {
      if (!validator.isCurrency(values.price)) {
        validationErrors.price = (
          <ValidationError message="Price must be in a currency format" />
        );
      }
    }

    if (!values.unit) {
      validationErrors.unit = <ValidationError />;
    }

    if (!values.amount) {
      validationErrors.amount = <ValidationError />;
    }
  }
  return validationErrors;
};

const CreatePantryItemPage = ({
  match: {
    params: { id }
  },
  itemsAutocomplete,
  itemLocations,
  itemAmounts,
  getItemsAutocomplete,
  getItemAmounts,
  getItemLocations,
  createPantryItem
}) => {
  const getData = async () => {
    await getItemsAutocomplete();
    await getItemAmounts();
    await getItemLocations();
  };

  useEffect(() => {
    getData();
  }, []);

  const {
    values,
    setValues,
    validationErrors,
    handleChange,
    handleSubmit
  } = useForm(() => submit(values), validate);

  const submit = async values => {
    values.pantryId = id;
    await createPantryItem(values);
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (values.itemId) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const getAutocompleteValue = value => {
    setValues({
      ...values,
      itemId: value
    });
  };

  return (
    <div className="page">
      <Link to="/pantries">
        <i className="fas fa-fw fa-arrow-left" /> Back to Pantries
      </Link>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Create Pantry Item</h2>
          <button type="submit" className="btn btn-success">
            Create Pantry Item
          </button>
        </div>
        <hr />

        <div className="form-group" style={{ position: "relative" }}>
          <label htmlFor="">
            Item <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          {itemsAutocomplete && (
            <Autocomplete
              getAutocompleteValue={getAutocompleteValue}
              placeholder={"Start typing to select item"}
              name={"itemId"}
              suggestions={itemsAutocomplete}
              classes={`form-control ${validationErrors.itemId && "invalid"}`}
            />
          )}
        </div>
        {validationErrors.itemId && (
          <p className="help text-danger">{validationErrors.itemId}</p>
        )}

        <div className="form-group">
          <label htmlFor="">
            Price <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          <div className={`input-group ${validationErrors.price && "invalid"}`}>
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
        {validationErrors.price && (
          <p className="help text-danger">{validationErrors.price}</p>
        )}

        <div className="form-group">
          <label htmlFor="">
            Unit <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          <input
            type="text"
            disabled={disabled}
            className={`form-control ${validationErrors.unit && "invalid"}`}
            value={values.unit || ""}
            onChange={handleChange}
            name="unit"
          />
        </div>
        {validationErrors.unit && (
          <p className="help text-danger">{validationErrors.unit}</p>
        )}

        <div className="form-group">
          <label htmlFor="">
            Item Amount
            <i className="fas fa-xs fa-fw fa-asterisk required" />
          </label>
          <select
            name="amount"
            id="amount"
            disabled={disabled}
            className={`form-control ${validationErrors.amount && "invalid"}`}
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
        {validationErrors.amount && (
          <p className="help text-danger">{validationErrors.amount}</p>
        )}

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
        {validationErrors.location && (
          <p className="help text-danger">{validationErrors.location}</p>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    itemsAutocomplete: state.item.itemsAutocomplete,
    itemAmounts: state.item.itemAmounts,
    itemLocations: state.item.itemLocations
  };
};

export default connect(
  mapStateToProps,
  {
    getItemsAutocomplete,
    getItemAmounts,
    getItemLocations,
    createPantryItem
  }
)(CreatePantryItemPage);
