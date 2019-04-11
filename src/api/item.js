import { axiosInstance } from "./index";

const item = {
  getItems: async () => {
    let response;
    try {
      response = await axiosInstance.get("http://localhost:8080/api/item");
    } catch (err) {
      if (err.response.status === 404) {
        return {
          errors: ["Unable to retrieve items."]
        };
      }

      return err.response;
    }

    return response.data.items;
  },
  getItemAutocomplete: async () => {
    let response;
    try {
      response = await axiosInstance.get(
        "http://localhost:8080/api/item/autocomplete"
      );
    } catch (err) {
      if (err.response.status === 404) {
        return {
          errors: ["Unable to retrieve items autocomplete."]
        };
      }

      return err.response;
    }

    return response.data.items;
  },
  create: async item => {
    let response;
    try {
      response = await axiosInstance.post(
        "http://localhost:8080/api/item",
        item
      );
    } catch (err) {
      return err.response.data;
    }

    return response;
  }
};

export default item;
