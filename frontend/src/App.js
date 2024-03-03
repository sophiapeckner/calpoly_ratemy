import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import Organizations from './organizations/organizations';
import Login from './login/login';
import CreateAccount from './signUp/createAccount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CreateAccount/>
      
      

    </div>
  );
}

export default App;
