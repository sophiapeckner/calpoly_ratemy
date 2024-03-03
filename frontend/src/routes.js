import React from "react";
import NavBar from "./components/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import CreateAccount from "./Pages/createAccount"
import Login from "./Pages/login";
import Organizations from "./Pages/organizationPage";
import Events from "./Pages/eventPage";
import Home from "./Pages/home";
import Organization from "./Pages/organization"

export const Routes1 = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/Home" element={Home()}/>
        <Route exact path="/Organizations" element={Organizations()} />
        <Route exact path="/Events" element={Events()}/>
        <Route exact path="/CreateAccount" element={CreateAccount()} />
        <Route exact path="/Login" element={Login()} />
        <Route path="/" element={<Navigate to="/CreateAccount" />} />
        <Route exact path="/organizations/:id" element={<Organization />} />
      </Routes>
    </div>
  );
};
