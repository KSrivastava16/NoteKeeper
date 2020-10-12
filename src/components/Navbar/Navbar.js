import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logonew.PNG";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/action";
const Navbar = ({ user, logout }) => {
  const history = useHistory();
  return (
    <nav className="nav-container">
      <div className="logo nav-flex-items">
        <i
          style={{ fontSize: "30px", marginRight: "10px" }}
          className="fas fa-clipboard"
        ></i>
        <h3 style={{ display: "inline" }}>
          <span className="hindi">नोट कीपर</span> (NoteKeeper){" "}
        </h3>
      </div>
      <ul className="nav-flex-items">
        <li>
          <NavLink className="link" exact to="/" activeClassName="current_link">
            <i className="fas fa-house-user"></i> Home
          </NavLink>
        </li>
        {user === null ? (
          <React.Fragment>
            <li>
              <NavLink
                className="link"
                to="/login"
                activeClassName="current_link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/register"
                activeClassName="current_link"
              >
                Register
              </NavLink>
            </li>
          </React.Fragment>
        ) : (
          ""
        )}
        <li>
          <NavLink className="link" activeClassName="current_link" to="/notes">
            <i className="fas fa-sticky-note"></i> Notes
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink className="link" to="/login" onClick={() => logout()}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch(logout(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
