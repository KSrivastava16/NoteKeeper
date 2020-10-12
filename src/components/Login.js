import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import newhook from "./newhoook";
import { login } from "../redux/auth/action";
import "./auth.css";
const Login = ({ login, currentUser, error, loading }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = newhook({});
  const [passwordField, setPasswordField] = useState("password");
  const [err, setError] = useState({
    status: false,
    msg: "",
  });
  const history = useHistory();

  //Setting Error Status and Unmounting it
  const errorStatus = (err) => {
    setError({ status: true, msg: err });
    setTimeout(() => {
      setError({ status: false, msg: "" });
    }, 5000);
  };

  const logginIn = async (e) => {
    e.preventDefault();
    if (userName && password) login({ userName, password, history });
    else errorStatus("Enter Username password");
  };
  //Show Password Function
  const showPassword = () => {
    setPasswordField(passwordField === "password" ? "text" : "password");
  };

  useEffect(() => {
    // if (currentUser !== null) {
    //   history.push("/notes");
    // }
  }, []);
  console.log("Error", error);
  return (
    <React.Fragment>
      {currentUser === null ? ( //Checking condition whether there is current logged in user
        <div className="formdiv ">
          <h3 className="text-primary">
            Login to start making your notes <i class="far fa-clipboard"></i>
          </h3>
          {!loading ? ( //Checking if loading si set to be true
            <div>
              <form onSubmit={logginIn} className="">
                {err.status && (
                  <div className="text-danger text-center m-2">
                    <p>
                      <i class="fas fa-exclamation-circle"></i> {err.msg}
                    </p>
                  </div>
                )}
                {error && (
                  <div className="text-danger text-center m-2">
                    <p>
                      <i class="fas fa-exclamation-circle"></i> {error}
                    </p>
                  </div>
                )}

                <div className="card-container">
                  <label className="flex-left" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    className="flex-right"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="card-container">
                  <label className="flex-left" htmlFor="">
                    Password
                  </label>
                  <input
                    type={passwordField}
                    value={password}
                    className="flex-right"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                  />
                </div>
                <div
                  className="mt-2 ml-3 "
                  onClick={showPassword}
                  style={{ cursor: "pointer" }}
                >
                  <i class="fas fa-eye"></i> Show Password
                </div>

                <button className="button btn-success " type="submit">
                  Login
                </button>
              </form>
              <p>
                Not a User
                <NavLink to="/Register"> Register</NavLink>
              </p>{" "}
            </div>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      ) : (
        <h1 className="text-success m-3">Already Logged in</h1>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    loading: state.auth.loading,
    error: state.auth.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch(login(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
