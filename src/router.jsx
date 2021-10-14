import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/LoginForm" component={LoginForm}/>
          <Route path="/Login" component={Login}/>
          <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

