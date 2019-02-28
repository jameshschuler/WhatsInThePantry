import React from "react";
import AddItemForm from "./AddItemForm";

const AddItemPage = () => {
  return (
    <div className="container">
      <div className="page">
        <h2 className="text-center">Add New Item</h2>
        <AddItemForm />
      </div>
    </div>
  );
};

export default AddItemPage;
