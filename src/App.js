import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GuestRoute from "./components/auth/GuestRoute";
import LoginPage from "./components/auth/Login/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import RegisterPage from "./components/auth/Register/RegisterPage";
import Home from "./components/Home";
import ItemPage from "./components/item";
import AddItemPage from "./components/item/addItem/AddItemPage";
import EditItemPage from "./components/item/editItem/EditItemPage";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import ShoppingListPage from "./components/shoppinglist/Index";

class App extends Component {
  isAuth() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      document.body.classList.add("bg");
    } else {
      document.body.classList.remove("bg");
    }
  }

  render() {
    this.isAuth();
    const { isAuthenticated } = this.props;

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header isAuthenticated={isAuthenticated} />
          <NavBar isAuthenticated={isAuthenticated} />
          <GuestRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/login"
            component={LoginPage}
          />
          <GuestRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/register"
            component={RegisterPage}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/"
            component={Home}
          />

          {/**
           * Shopping List Routes
           */}
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/shopping-list"
            component={ShoppingListPage}
          />

          {/**
           * Item Routes
           */}
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/item"
            component={ItemPage}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/add-item"
            component={AddItemPage}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/edit-item/:id"
            component={EditItemPage}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.user.id
  };
};

export default connect(mapStateToProps)(App);
