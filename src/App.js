import React from "react";
import "./App.css";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Notes from "./containers/Note";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar/Navbar";
import creatNote from "./components/Notes/createNote";
import EditNote from "./components/Notes/EditNote";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Register" component={Registration}></Route>
        <Route path="/notes" component={Notes}></Route>
        <Route path="/createnote/:title" component={creatNote}></Route>
        <Route path="/editnote/:id" component={EditNote}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
