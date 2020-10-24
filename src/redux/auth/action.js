import { loginUser, getUserInfo, registerUser } from "./methods";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_USER,
} from "../../constants/action";
//export const loginUser = { type: "LOGIN" };

export const loginInitiate = () => ({
  type: LOGIN,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload: payload,
});

export const login = ({ userName, password, history }) => {
  return (dispatch) => loginUser(dispatch, userName, password, history);
};

export const logout = (history) => ({ type: LOGOUT, payload: history });

export const getUserInitiate = () => ({
  type: GET_USER,
});

export const getUserSuccess = (userInfo) => ({
  type: GET_USER_SUCCESS,
  payload: userInfo,
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const getUser = () => {
  console.log("Inside getUser");
  return getUserInfo;
};

export const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

export const registerUserFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const register = (info) => {
  return (dispatch) => registerUser(dispatch, info);
};
