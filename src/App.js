import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GuestRoute from "./components/auth/GuestRoute";
import LoginPage from "./components/auth/Login/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import RegisterPage from "./components/auth/Register/RegisterPage";
import Home from "./components/Home";
import AddItemPage from "./components/item/addItem/AddItemPage";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={`wrapper ${!this.props.isAuthenticated ? "bg" : ""}`}>
          <Header isAuthenticated={this.props.isAuthenticated} />
          <NavBar isAuthenticated={this.props.isAuthenticated} />

          <GuestRoute
            isAuthenticated={this.props.isAuthenticated}
            exact
            path="/login"
            component={LoginPage}
          />
          <GuestRoute
            isAuthenticated={this.props.isAuthenticated}
            exact
            path="/register"
            component={RegisterPage}
          />
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            exact
            path="/"
            component={Home}
          />
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            exact
            path="/add-item"
            component={AddItemPage}
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
