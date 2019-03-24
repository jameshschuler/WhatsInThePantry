import decode from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import setAuthorizationHeader from "./api/setAuthorizationHeader";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { userLoggedIn } from "./store/actions/authActions";
import "./styles/main.scss";

const token = localStorage.getItem("whatsinthepantryJWT");
if (token) {
  const payload = decode(token);
  const user = {
    token,
    id: payload.id,
    username: payload.username
  };

  setAuthorizationHeader(token);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
