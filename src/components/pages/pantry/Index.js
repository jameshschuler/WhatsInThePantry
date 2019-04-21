import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPantries } from "../../../store/actions/pantryActions";
import Alert from "../../helpers/Alert";

const Index = ({ pantries, getPantries }) => {
  useEffect(() => {
    getPantries();
  }, []);

  const parseDate = date => {
    const nd = new Date(date);
    return nd.toLocaleDateString();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Pantries</h2>
            <Link to="/pantries/create" className="btn btn-success">
              New Pantry
            </Link>
          </div>
          <hr />
          {pantries.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped mt-3">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Shared</th>
                    <th>Created</th>
                    <th>Pantry Items</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {pantries.map((pantry, index) => {
                    return (
                      <tr key={index}>
                        <td>{pantry.name}</td>
                        <td>{pantry.isShared ? "Yes" : "No"}</td>
                        <td>{parseDate(pantry.createdAt)}</td>
                        <td>{pantry.pantryItems.length}</td>
                        <td className="d-flex justify-content-end">
                          <Link to={`/pantries/${pantry.id}/items`}>
                            <i className="fas fa-lg fa-arrow-right fa-fw" />
                          </Link>
                          <Link to={`/pantries/${pantry.id}/item/create`}>
                            <i className="fas fa-lg fa-plus fa-fw" />
                          </Link>
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
              message={"No pantries found. Try creating a new one!"}
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
    pantries: state.pantry.pantries
  };
};

export default connect(
  mapStateToProps,
  {
    getPantries
  }
)(Index);
