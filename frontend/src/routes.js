import React from "react";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Pages/createAccount";
import Login from "./Pages/login";
import Organizations from "./Pages/organizationPage";

export const Routes1 = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/Organizations" element={Organizations()} />
        <Route exact path="/CreateAccount" element={CreateAccount()} />
        <Route exact path="/Login" element={Login()} />
      </Routes>
    </div>
  );
};
