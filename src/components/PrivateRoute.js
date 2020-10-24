import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Error from "./Error";
const PrivateRoute = (props) => {
  console.log(props.currentUser !== null);
  return (
    <Fragment>
      {console.log(props.component, "&", props.path)}
      {props.currentUser !== null ? (
        <Route exact path={props.path} component={props.component} />
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
