import React, { Component, useReducer } from "react";
import { NavLink } from "react-router-dom";
import reducer from "./redux/reducer";
import { connect } from "react-redux";
import "./App.css";
function Home({ currentUser }) {
  return (
    <div>
      <div className="notekeeper-main ">
        <h1 className="mb-3">
          <i class="fas fa-clipboard"></i> Welcome to Notekeeper App
        </h1>
      </div>
      {!currentUser ? (
        <NavLink to="/Login" className="button btn-primary mt-2 ">
          Login first
        </NavLink>
      ) : (
        <div className="logged-in">
          <h3>Already Logged in Start Making notes</h3>
          <NavLink to="/notes" className="button btn-primary">
            Create Notes
          </NavLink>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps)(Home);
