import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getItemAmounts,
  getItemLocations,
  getItemsAutocomplete
} from "../../../../store/actions/itemActions";
import { createPantryItem } from "../../../../store/actions/pantryActions";
import Alert from "../../../helpers/Alert";
import ErrorAlert from "../../../helpers/ErrorAlert";
import Spinner from "../../../helpers/Spinner";
import CreatePantryItemForm from "./CreatePantryItemForm";

const CreatePantryItemPage = ({
  match: {
    params: { id }
  },
  errors,
  message,
  isFetching,
  itemsAutocomplete,
  itemLocations,
  itemAmounts,
  getItemsAutocomplete,
  getItemAmounts,
  getItemLocations,
  createPantryItem
}) => {
  const getData = async () => {
    await getItemsAutocomplete();
    await getItemAmounts();
    await getItemLocations();
  };

  useEffect(() => {
    getData();
  }, []);

  const submit = async values => {
    values.pantryId = id;
    await createPantryItem(values);
  };

  return (
    <div className="page">
      <Alert type={"success"} header={"Success!"} message={message} />
      <ErrorAlert errors={errors} />
      <Link to="/pantries">
        <i className="fas fa-fw fa-arrow-left" /> Back to Pantries
      </Link>
      {isFetching ? (
        <Spinner />
      ) : (
        <CreatePantryItemForm
          itemsAutocomplete={itemsAutocomplete}
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
    itemsAutocomplete: state.item.itemsAutocomplete,
    itemAmounts: state.item.itemAmounts,
    itemLocations: state.item.itemLocations
  };
};

export default connect(
  mapStateToProps,
  {
    getItemsAutocomplete,
    getItemAmounts,
    getItemLocations,
    createPantryItem
  }
)(CreatePantryItemPage);
