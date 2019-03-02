import React from "react";
import { Link } from "react-router-dom";
import MyItems from "./MyItems";

const ItemPage = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="page-header">
          <h2 className="text-left">Item Management</h2>
          <div className="actions">
            <Link to="/add-item" className="btn btn-outline-success">
              New Item
            </Link>
          </div>
        </div>
        <hr />

        <div className="page-content">
          <MyItems />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
