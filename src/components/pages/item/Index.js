import React, { useEffect, useState } from "react";
import api from "../../../api/index";
import Spinner from "../../Spinner";

const Index = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await api.items.getItems();

    if (response.errors) {
      setErrors(response.errors);
    } else {
      setItems(response);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Items</h2>
            <button className="btn btn-success">New Item</button>
          </div>
          <hr />
          {errors && errors.length > 0 ? (
            errors.map((error, index) => {
              return (
                <div className="alert alert-danger" key={index}>
                  <strong className="mr-2">Error!</strong> {error}
                </div>
              );
            })
          ) : items && items.length > 0 ? (
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
