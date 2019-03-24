import axios from "axios";

export default {
  signin: async creds => {
    let response;
    try {
      response = await axios.post("http://localhost:8080/api/account/login", {
        usernameOrEmail: creds.usernameOrEmail,
        password: creds.password
      });
    } catch (err) {
      return err.response.data;
    }

    return response.data.user;
  },
  items: {
    getItems: async () => {
      let response;
      try {
        response = await axios.get("http://localhost:8080/api/item");
      } catch (err) {
        if (err.response.status === 404) {
          return {
            errors: ["Unable to retrieve items."]
          };
        }
        return err.response.data;
      }

      return response.data.items;
    }
  }
};
