import React, { useState, useEffect } from "react";
import "./Registration.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { register } from "../redux/auth/action";
const Registration = ({ loginStatus, registerUser, user, error }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const createProfile = (e) => {
    e.preventDefault();
    const userInfo = JSON.stringify({
      name,
      email,
      username,
      password,
    });
    registerUser({ userInfo, history });
  };

  useEffect(() => {
    if (user) {
      history.push("/notes");
    }
  }, [loginStatus]);

  return (
    <React.Fragment>
      <h2>Please Create your account to continue further</h2>
      <div className="formdiv">
        <form className="p-2" onSubmit={createProfile}>
          <div className="reg-container">
            <label className="flex-left">Name</label>
            <input
              type="text"
              className="mb-3 mr-3 flex-right"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="reg-container">
            <label className="flex-left">Email</label>
            <input
              type="email"
              className="mb-3 mr-3 flex-right"
              placeholder="Enter your email-id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="reg-container">
            <label className="flex-left">Username</label>
            <input
              type="text"
              className="mb-3 mr-3 flex-right"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="reg-container">
            <label className="flex-left ">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              className="mb-3 mr-3 flex-right"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Create Profile
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loginStatus: state.auth.loginStatus,
    user: state.auth.currentUser,
    error: state.auth.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (payload) => dispatch(register(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
