import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getItems } from "../../../store/actions/itemActions";
import Alert from "../../helpers/Alert";

const Index = ({ getItems, items }) => {
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
          {items && items.length > 0 ? (
            <div className="card-deck">
              {items.map((item, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.name} - {item.description}
                        </h5>
                        <p className="card-text">{item.itemCategory.name}</p>
                        <p className="card-text">
                          <span>Default Amount: </span>
                          {item.defaultItemAmount &&
                            item.defaultItemAmount.name}
                        </p>
                        <p className="card-text">
                          <span>Default Location: </span>
                          {item.defaultItemLocation &&
                            item.defaultItemLocation.name}
                        </p>

                        <hr />
                        <div className="d-flex justify-content-end">
                          <Link to={`/items/${item.id}/edit`}>
                            <i className="fas fa-lg fa-pencil-alt fa-fw" />
                          </Link>
                          <Link to={`/items/${item.id}/delete`}>
                            <i className="fas fa-lg fa-trash-alt fa-fw" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
