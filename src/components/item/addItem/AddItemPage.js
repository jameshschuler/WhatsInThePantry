import React from "react";
import AddItemForm from "./AddItemForm";

const AddItemPage = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="page-header">
          <h2 className="text-left">New item</h2>
          <div className="actions">
            <button
              className="btn btn-outline-success"
              type="submit"
              form="add-item-form"
            >
              Add Item
            </button>
          </div>
        </div>
        <hr />

        <div className="page-content">
          <AddItemForm />
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
