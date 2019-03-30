import React, { useEffect, useState } from "react";
import api from "../../../api";
import CreateItemForm from "./CreateItemForm";

const CreateItemPage = () => {
  const [errors, setErrors] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);
  const [itemAmounts, setItemAmounts] = useState([]);
  const [itemLocations, setItemLocations] = useState([]);

  useEffect(() => {
    getItemCategories();
    getItemAmounts();
    getItemLocations();
  }, []);

  const getItemCategories = async () => {
    const response = await api.category.getItemCategories();
    if (response.data && response.data.errors) {
      setErrors(response.data.errors);
    } else {
      setItemCategories(response);
    }
  };

  const getItemAmounts = async () => {
    const response = await api.itemAmount.getItemAmounts();
    if (response.data && response.data.errors) {
      setErrors(response.data.errors);
    } else {
      setItemAmounts(response);
    }
  };

  const getItemLocations = async () => {
    const response = await api.itemLocation.getItemLocations();
    if (response.data && response.data.errors) {
      setErrors(response.data.errors);
    } else {
      setItemLocations(response);
    }
  };

  return (
    <div className="page">
      {errors &&
        errors.map((error, index) => {
          return (
            <div className="alert alert-danger" key={index}>
              <strong className="mr-2">Error!</strong> {error}
            </div>
          );
        })}
      <CreateItemForm
        itemCategories={itemCategories}
        itemLocations={itemLocations}
        itemAmounts={itemAmounts}
      />
    </div>
  );
};

export default CreateItemPage;
