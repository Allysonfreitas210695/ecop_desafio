import React from "react";
import './App.css';
import { Login } from "./pages/Login";
import { AppProvider } from "./Providers";
import { Router } from "./router";

export const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router/>
      </div>
    </AppProvider>
  );
}