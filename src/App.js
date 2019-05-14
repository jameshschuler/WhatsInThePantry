import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GuestRoute from "./components/auth/GuestRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import RegisterPage from "./components/auth/Register/RegisterPage";
import SignInPage from "./components/auth/SignIn/SignInPage";
import Alert from "./components/helpers/Alert";
import ErrorAlert from "./components/helpers/ErrorAlert";
import Spinner from "./components/helpers/Spinner";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import CreateItemPage from "./components/pages/item/CreateItemPage";
import EditItemPage from "./components/pages/item/EditItemPage";
import ItemIndex from "./components/pages/item/Index";
import CreatePantryPage from "./components/pages/pantry/CreatePantryPage";
import PantryIndex from "./components/pages/pantry/Index";
import CreatePantryItemPage from "./components/pages/pantry/pantryItem/CreatePantryItemPage";
import PantryItemIndex from "./components/pages/pantry/pantryItem/Index";
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
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      await this.props.me();
    }
  }

  render() {
    this.isAuth();
    const { isAuthenticated, messages, errors, isFetching } = this.props;

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header isAuthenticated={isAuthenticated} />
          <NavBar isAuthenticated={isAuthenticated} />
          <div className="container">
            {isFetching && <Spinner />}
            <Alert type={"success"} header={"Success!"} message={messages} />
            <ErrorAlert errors={errors} />

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
              component={ItemIndex}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/items/create"
              component={CreateItemPage}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/items/:id/edit"
              component={EditItemPage}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/pantries"
              component={PantryIndex}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/pantries/create"
              component={CreatePantryPage}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/pantries/:id/item/create"
              component={CreatePantryItemPage}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/pantries/:id/items"
              component={PantryItemIndex}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, errors, messages } = state.global;

  return {
    isAuthenticated: !!state.auth.user,
    messages,
    isFetching,
    errors
  };
};

export default connect(
  mapStateToProps,
  {
    me
  }
)(App);
