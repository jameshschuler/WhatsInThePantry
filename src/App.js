import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GuestRoute from "./components/auth/GuestRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import RegisterPage from "./components/auth/Register/RegisterPage";
import SignInPage from "./components/auth/SignIn/SignInPage";
import DashboardPage from "./components/DashboardPage";
import HomePage from "./components/HomePage";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Index from "./components/pages/item/Index";
import { me } from "./store/actions/authActions";

class App extends Component {
  isAuth() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      document.body.classList.add("bg");
    } else {
      document.body.classList.remove("bg");
    }
  }

  async componentDidMount() {
    await this.props.me();
  }

  render() {
    this.isAuth();
    const { isAuthenticated } = this.props;

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header isAuthenticated={isAuthenticated} />
          <NavBar isAuthenticated={isAuthenticated} />
          <div className="container">
            <GuestRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/"
              component={HomePage}
            />
            <GuestRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/signin"
              component={SignInPage}
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
              path="/dashboard"
              component={DashboardPage}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/items"
              component={Index}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.user
  };
};

export default connect(
  mapStateToProps,
  {
    me
  }
)(App);
