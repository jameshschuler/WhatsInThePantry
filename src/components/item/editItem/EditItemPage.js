import React from "react";
import EditItemForm from "./EditItemForm";

const EditItemPage = ({ ...props }) => {
  console.log(props.match.params.id);
  return (
    <div className="container">
      <div className="page">
        <div className="page-header">
          <h2 className="text-left">Edit item</h2>
          <div className="actions">
            <button
              className="btn btn-outline-success"
              type="submit"
              form="edit-item-form"
            >
              Save
            </button>
          </div>
        </div>
        <hr />

        <div className="page-content">
          <EditItemForm />
        </div>
      </div>
    </div>
  );
};

export default EditItemPage;
