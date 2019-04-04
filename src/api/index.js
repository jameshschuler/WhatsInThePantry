import axios from "axios";

const axiosInstance = axios.create();

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
  items: {
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
  },
  category: {
    getItemCategories: async () => {
      let response;
      try {
        response = await axiosInstance.get(
          "http://localhost:8080/api/item/category"
        );
      } catch (err) {
        if (err.response.status === 404) {
          return {
            data: {
              errors: ["Unable to retrieve item categories."]
            }
          };
        }

        return err.response;
      }

      return response.data.itemCategories;
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
        if (err.response.status === 404) {
          return {
            data: {
              errors: ["Unable to retrieve item amnounts."]
            }
          };
        }

        return err.response;
      }

      return response.data.itemAmounts;
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
        if (err.response.status === 404) {
          return {
            data: {
              errors: ["Unable to retrieve item locations."]
            }
          };
        }

        return err.response;
      }

      return response.data.itemLocations;
    }
  },
  pantries: {
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
    }
  }
};
