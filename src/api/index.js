import axios from "axios";
import item from "./item";
import pantry from "./pantry";

export const axiosInstance = axios.create();

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  item,
  pantry,
  signin: async creds => {
    let response;
    try {
      response = await axiosInstance.post(
        "http://localhost:8080/api/account/login",
        {
          usernameOrEmail: creds.usernameOrEmail,
          password: creds.password
        }
      );
    } catch (err) {
      return err.response.data;
    }

    return response.data.user;
  },
  me: async () => {
    let response;
    try {
      response = await axiosInstance.get(
        "http://localhost:8080/api/account/me"
      );
    } catch (err) {
      return err.response;
    }

    return response.data.user;
  },
  category: {
    getItemCategories: async () => {
      let response;
      try {
        response = await axiosInstance.get(
          "http://localhost:8080/api/item/category"
        );
      } catch (err) {
        const { data } = err.response;
        return data;
      }

      return response.data;
    }
  },
  itemAmount: {
    getItemAmounts: async () => {
      let response;
      try {
        response = await axiosInstance.get(
          "http://localhost:8080/api/item/amount"
        );
      } catch (err) {
        const { data } = err.response;
        return data;
      }

      return response.data;
    }
  },
  itemLocation: {
    getItemLocations: async () => {
      let response;
      try {
        response = await axiosInstance.get(
          "http://localhost:8080/api/item/location"
        );
      } catch (err) {
        const { data } = err.response;
        return data;
      }

      return response.data;
    }
  }
};
