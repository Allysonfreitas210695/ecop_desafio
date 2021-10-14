import React from "react";
import './App.css';
import { Login } from "./components/pages/Login";
import { Router } from "./router";

export const App = () => {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}