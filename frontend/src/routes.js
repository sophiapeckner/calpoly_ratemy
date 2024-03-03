import React from "react";
import NavBar from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./signUp/createAccount";
import Login from "./login/login";
import Organizations from "./organizations/organizations";
import Events from "./events/events";

export const Routes1 = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/Organizations" element={Organizations()} />
        <Route exact path="/Events" element={Events()}/>
        <Route exact path="/CreateAccount" element={CreateAccount()} />
        <Route exact path="/Login" element={Login()} />
      </Routes>
    </div>
  );
};
