import { axiosInstance } from "./index";

const pantry = {
  getPantries: async () => {
    let response;
    try {
      response = await axiosInstance.get("http://localhost:8080/api/pantry");
    } catch (err) {
      if (err.response.status === 404) {
        return {
          errors: ["Unable to retrieve pantries."]
        };
      }

      return err.response;
    }

    return response.data.pantries;
  },
  create: async name => {
    let response;
    try {
      response = await axiosInstance.post(
        "http://localhost:8080/api/pantry",
        name
      );
    } catch (err) {
      return err.response.data;
    }

    return response;
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
