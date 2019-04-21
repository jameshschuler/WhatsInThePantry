import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPantryItems } from "../../../../store/actions/pantryActions";
import Alert from "../../../helpers/Alert";

const PantryItemIndex = ({
  match: {
    params: { id }
  },
  getPantryItems,
  pantryItems
}) => {
  useEffect(() => {
    getPantryItems(id);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Pantry Items</h2>
            <Link
              to={`/pantries/${id}/item/create`}
              className="btn btn-success"
            >
              New Pantry Item
            </Link>
          </div>
          <hr />
          <div>
            {pantryItems.length > 0 ? (
              <div className="card-deck">
                {pantryItems.map((pantryItem, index) => {
                  return (
                    <div className="card" key={index}>
                      <div className="card-body">
                        <h4 className="card-title">{pantryItem.item.name}</h4>
                        <p className="card-text">
                          <b>Price / Unit: </b> {pantryItem.price} /{" "}
                          {pantryItem.unit}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                          <Link
                            to={`/pantries/${id}/item/${
                              pantryItem.item.id
                            }/edit`}
                          >
                            <i className="fas fa-lg fa-pencil-alt fa-fw" />
                          </Link>
                          <Link
                            to={`/pantries/${id}/item/${
                              pantryItem.item.id
                            }/delete`}
                          >
                            <i className="fas fa-lg fa-trash-alt fa-fw" />
                          </Link>
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
                message={"No pantry items found. Try creating a new one!"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    pantryItems: state.pantry.pantryItems
  };
};

export default connect(
  mapStateToProps,
  {
    getPantryItems
  }
)(PantryItemIndex);
