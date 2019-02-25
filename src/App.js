import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import LoginPage from "./components/auth/Login/LoginPage";
import RegisterPage from "./components/auth/Register/RegisterPage";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <NavBar />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/add-item" component={AddItem} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
