import React from 'react';
import NavBar from './navbar/navbar';
import Organizations from './organizations/organizations'
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './signUp/createAccount';
import Login from './login/login';

export const Routes1 = () => {
    return (
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/Organizations" element={Organizations()} />
          <Route exact path="/CreateAccount" element={CreateAccount()}/>
          <Route exact path='/Login' element={Login()}/>
        </Routes>
      </div>
    );
  };