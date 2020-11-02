import React from "react";
import "./App.css";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "./containers/Note.js";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar/Navbar";
import creatNote from "./components/Notes/createNote.js";
import EditNote from "./components/Notes/EditNote.js";
import Home from "./Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Register" component={Registration}></Route>
        <PrivateRoute path="/notes" component={Notes}></PrivateRoute>
        <Route path="/createnote/:title" component={creatNote}></Route>
        <Route exact path="/editnote/:id" component={EditNote}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
