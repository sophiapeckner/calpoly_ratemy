import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Organizations from "./Pages/organizationPage";
//import Login from "./login/login";
//import CreateAccount from "./signUp/createAccount";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from './Pages/eventPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Organizations />
    </div>
  );
}

export default App;
