import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Please Login To continue</h1>
      <NavLink to="/login" className="button bg-primary">
        Login
      </NavLink>
    </div>
  );
};

export default Error;
