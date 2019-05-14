import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getItem,
  getItemAmounts,
  getItemCategories,
  getItemLocations,
  updateItem
} from "../../../store/actions/itemActions";
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

const EditItemPage = ({
  match: {
    params: { id }
  },
  history,
  itemLocations,
  itemAmounts,
  itemCategories,
  item,
  getItemAmounts,
  getItemLocations,
  getItemCategories,
  getItem,
  updateItem
}) => {
  const [itemValue, setItemValue] = useState({});

  const getData = async () => {
    await getItemAmounts();
    await getItemLocations();
    await getItemCategories();
    await getItem(id);

    setItemValue(item);
  };

  const submit = async values => {
    values.id = id;
    await updateItem(values);
  };

  useEffect(() => {
    getData();
  }, []);

  const { values, validationErrors, handleChange, handleSubmit } = useForm(
    () => submit(values),
    validate
  );

  if (itemValue) {
    if (item) {
      values.itemName = item.name;
      values.category = item.itemCategory.id;
      values.amount = item.defaultItemAmount.id;
      values.description = item.description || "";
      values.location =
        item.defaultItemLocation != null ? item.defaultItemLocation.id : "";
    }
  }

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Edit Item</h2>
          <button type="submit" className="btn btn-success">
            Save Item
          </button>
        </div>
        <hr />

        {item && (
          <>
            <div className="form-group">
              <label htmlFor="">
                Name <i className="fas fa-xs fa-fw fa-asterisk required" />
              </label>
              <input
                type="text"
                className={`form-control ${validationErrors.itemName &&
                  "invalid"}`}
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
                Item Category{" "}
                <i className="fas fa-xs fa-fw fa-asterisk required" />
              </label>
              <select
                className={`form-control ${validationErrors.category &&
                  "invalid"}`}
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
                className={`form-control ${validationErrors.amount &&
                  "invalid"}`}
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
          </>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    itemAmounts: state.item.itemAmounts,
    itemLocations: state.item.itemLocations,
    itemCategories: state.item.itemCategories,
    item: state.item.item
  };
};

export default connect(
  mapStateToProps,
  {
    getItemAmounts,
    getItemLocations,
    getItemCategories,
    getItem,
    updateItem
  }
)(EditItemPage);
