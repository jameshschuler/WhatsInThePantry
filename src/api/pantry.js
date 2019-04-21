import { axiosInstance } from "./index";

const pantry = {
  getPantries: async () => {
    let response;
    try {
      response = await axiosInstance.get("http://localhost:8080/api/pantry");
    } catch (err) {
      const { data } = err.response;
      return data;
    }

    return response.data;
  },
  getPantryItems: async pantryId => {
    let response;
    try {
      response = await axiosInstance.get(
        `http://localhost:8080/api/pantry/${pantryId}/items`
      );
      console.log(response);
    } catch (err) {
      const { data } = err.response;
      return data;
    }

    return response.data;
  },
  create: async name => {
    let response;
    try {
      response = await axiosInstance.post(
        "http://localhost:8080/api/pantry",
        name
      );
    } catch (err) {
      const { data } = err.response;
      return data;
    }

    return response.data;
  },
  createPantryItem: async pantryItem => {
    let response;
    try {
      response = await axiosInstance.post(
        "http://localhost:8080/api/pantry/item",
        pantryItem
      );
    } catch (err) {
      return err.response.data;
    }

    return response;
  }
};

export default pantry;
