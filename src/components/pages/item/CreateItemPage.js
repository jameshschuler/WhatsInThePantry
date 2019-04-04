import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createItem,
  getItemAmounts,
  getItemCategories,
  getItemLocations
} from "../../../store/actions/itemActions";
import Alert from "../../helpers/Alert";
import ErrorAlert from "../../helpers/ErrorAlert";
import Spinner from "../../helpers/Spinner";
import CreateItemForm from "./CreateItemForm";

const CreateItemPage = ({
  getItemCategories,
  getItemAmounts,
  getItemLocations,
  createItem,
  itemCategories,
  itemLocations,
  itemAmounts,
  isFetching,
  errors,
  message
}) => {
  useEffect(() => {
    getItemCategories();
    getItemAmounts();
    getItemLocations();
  }, []);

  const submit = async values => {
    await createItem(values);
  };

  return (
    <div className="page">
      <Alert type={"success"} header={"Success!"} message={message} />
      <ErrorAlert errors={errors} />
      <Link to="/items">
        <i className="fas fa-fw fa-arrow-left" /> Back to Items
      </Link>
      {isFetching ? (
        <Spinner />
      ) : (
        <CreateItemForm
          itemCategories={itemCategories}
          itemLocations={itemLocations}
          itemAmounts={itemAmounts}
          submit={submit}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { isFetching, errors, message } = state.global;

  return {
    ...state,
    isFetching,
    errors,
    message,
    itemCategories: state.item.itemCategories,
    itemAmounts: state.item.itemAmounts,
    itemLocations: state.item.itemLocations
  };
};

export default connect(
  mapStateToProps,
  {
    getItemCategories,
    getItemLocations,
    getItemAmounts,
    createItem
  }
)(CreateItemPage);
