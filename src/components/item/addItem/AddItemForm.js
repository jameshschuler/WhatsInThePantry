import React from "react";

const AddItemForm = () => {
  return (
    <form id="add-item-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Item Name"
          name="itemName"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Price"
          name="price"
          className="form-control"
        />
        <div className="form-group">
          <select className="custom-select" name="itemCategory">
            <option defaultValue>-- Select an Item Category --</option>
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
          <select className="custom-select" name="itemAmount">
            <option defaultValue>-- Select an Item Amount --</option>
            <option value="1">Full</option>
            <option value="2">Half</option>
            <option value="3">Low</option>
            <option value="3">Empty</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default AddItemForm;
