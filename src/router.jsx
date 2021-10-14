import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/LoginForm" component={LoginForm}/>
        <Route path="/Home" component={Home}/>
    </BrowserRouter>
  )
}