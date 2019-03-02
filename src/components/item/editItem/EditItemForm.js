import React from "react";

const EditItemForm = () => {
  return (
    <form id="edit-item-form" className="row">
      <div className="col-md-6 col-sm-12">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. Apple Sauce"
            name="itemName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            placeholder="$0.00"
            name="price"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Unit</label>
          <input
            type="text"
            placeholder="e.g. 2lb, 12oz"
            name="unit"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="addToPantry"
            id=""
            name="addToPantry"
          />
          <label className="form-check-label" htmlFor="addToPantry">
            Add to Pantry
          </label>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="form-group">
          <label>Item Category</label>
          <select className="custom-select" name="itemCategory">
            <option defaultValue>-- Select --</option>
            <option value="1">Produce</option>
            <option value="2">Meat</option>
            <option value="3">Frozen Foods</option>
            <option value="4">Dairy and Eggs</option>
            <option value="5">Bread, Cereal, Rice and Pasta</option>
            <option value="6">Staples and Miscellaneous Foods</option>
            <option value="7">Health and beauty</option>
            <option value="8">Household</option>
          </select>
        </div>
        <div className="form-group">
          <label>Default Item Amount</label>
          <select className="custom-select" name="itemAmount">
            <option value="1">Full</option>
            <option value="2">Half</option>
            <option value="3">Low</option>
            <option value="3">Empty</option>
          </select>
        </div>
        <div className="form-group">
          <label>Default Location</label>
          <select className="custom-select" name="defaultLocation">
            <option defaultValue>-- Select --</option>
            <option value="1">Target</option>
            <option value="2">Walmart</option>
            <option value="3">Wegman's</option>
            <option value="3">Price Chopper</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default EditItemForm;
