import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createPantry } from "../../../store/actions/pantryActions";
import Alert from "../../helpers/Alert";
import ErrorAlert from "../../helpers/ErrorAlert";
import Spinner from "../../helpers/Spinner";
import CreatePantryForm from "./CreatePantryForm";

const CreatePantryPage = ({ errors, message, isFetching, createPantry }) => {
  const submit = async values => {
    console.log("values", values);
    await createPantry(values.name);
  };

  return (
    <div className="page">
      <Alert type={"success"} header={"Success!"} message={message} />
      <ErrorAlert errors={errors} />
      <Link to="/pantries">
        <i className="fas fa-fw fa-arrow-left" /> Back to Pantries
      </Link>
      {isFetching ? <Spinner /> : <CreatePantryForm submit={submit} />}
    </div>
  );
};

const mapStateToProps = state => {
  const { isFetching, errors, message } = state.global;

  return {
    ...state,
    isFetching,
    errors,
    message
  };
};

export default connect(
  mapStateToProps,
  {
    createPantry
  }
)(CreatePantryPage);
