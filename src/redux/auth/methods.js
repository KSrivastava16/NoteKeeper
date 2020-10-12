import {
  loginSuccess,
  loginFailure,
  getUserSuccess,
  getUserFailure,
  getUser,
  registerUserSuccess,
  registerUserFailure,
} from "./action";

import { getNotes } from "../Notes/action";

import auth from "../authoraization";

export const loginUser = async (dispatch, userName, password, history) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: password }),
    });
    const res = await result.json();
    if (res.err) throw res.err;
    history.push("/Notes");
    dispatch(loginSuccess({ res, history }));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const getUserInfo = async (dispatch) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}/login`, {
      headers: {
        "auth-token": auth(),
      },
    });
    const response = await result.json();

    dispatch(getUserSuccess(response));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const registerUser = async (dispatch, info) => {
  const { userInfo, history } = info;
  console.log(userInfo);
  try {
    const result = await fetch(`${process.env.REACT_APP_API}/register`, {
      method: "POST",
      body: userInfo,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const response = await result.json();

    if (response.err) throw response.err;
    history.push("/Notes");
    dispatch(registerUserSuccess(response));
  } catch (error) {
    dispatch(registerUserFailure(error));
  }
};
