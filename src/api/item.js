import { axiosInstance } from "./index";

const item = {
  getItems: async () => {
    let response;
    try {
      response = await axiosInstance.get("http://localhost:8080/api/item");
    } catch (err) {
      const { data } = err.response;
      return data;
    }

    return response.data;
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
      const { data } = err.response;
      return data;
    }

    return response.data;
  }
};

export default item;
