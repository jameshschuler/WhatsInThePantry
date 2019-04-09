// import React from "react";

// const CreatePantryItemPage = ({
//   match: {
//     params: { id }
//   }
// }) => {
//   return <div />;
// };

// export default CreatePantryItemPage;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  isFetching
}) => {
  const submit = async values => {
    values.pantryId = id;
    console.log("values", values);
  };

  return (
    <div className="page">
      <Alert type={"success"} header={"Success!"} message={message} />
      <ErrorAlert errors={errors} />
      <Link to="/pantries">
        <i className="fas fa-fw fa-arrow-left" /> Back to Pantries
      </Link>
      {isFetching ? <Spinner /> : <CreatePantryItemForm submit={submit} />}
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

export default connect(mapStateToProps)(CreatePantryItemPage);
