import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getItems } from "../../../store/actions/itemActions";
import Alert from "../../helpers/Alert";
import Spinner from "../../helpers/Spinner";

const Index = ({ getItems, isFetching, items }) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Items</h2>
            <Link to="/items/create" className="btn btn-success">
              New Item
            </Link>
          </div>
          <hr />
          {isFetching && <Spinner />}
          {items.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped mt-3">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Default Item Amount</th>
                    <th>Default Location</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.itemCategory.name}</td>
                        <td>
                          {item.defaultItemAmount &&
                            item.defaultItemAmount.name}
                        </td>
                        <td>
                          {item.defaultItemLocation &&
                            item.defaultItemLocation.name}
                        </td>
                        <td>
                          <i className="fas fa-lg fa-pencil-alt fa-fw" />
                          <i className="fas fa-lg fa-trash-alt fa-fw" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Alert
              type={"info"}
              header={"Info!"}
              message={"No items found. Try creating a new one!"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    isFetching: state.global.isFetching,
    items: state.item.items
  };
};

export default connect(
  mapStateToProps,
  {
    getItems
  }
)(Index);
