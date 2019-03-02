import React from "react";
import { Link } from "react-router-dom";

const MyItems = () => {
  return (
    <div id="my-items">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Category</th>
              <th>Default Amount</th>
              <th>Default Location</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peanut Butter</td>
              <td>$2.99</td>
              <td>12oz</td>
              <td>Staples and Miscellaneous Foods</td>
              <td>Full</td>
              <td>Wegman's (Pittsford)</td>
              <td>
                <div className="float-right">
                  <Link to="edit-item/1">
                    <i className="fa fa-fw fa-pencil-alt" />
                  </Link>
                  <i className="fa fa-fw fa-trash-alt" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Organic Carrots</td>
              <td>$4.99</td>
              <td>2lb</td>
              <td>Produce</td>
              <td>Full</td>
              <td>Wegman's (Pittsford)</td>
              <td>
                <div className="float-right">
                  <Link to="edit-item/2">
                    <i className="fa fa-fw fa-pencil-alt" />
                  </Link>
                  <i className="fa fa-fw fa-trash-alt" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
