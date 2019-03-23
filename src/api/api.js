import axios from "axios";

const api = {
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
  }
};

export default api;
