import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../../constants/action";
const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  userInfo: null,
  loginStatus: false,
  loading: false,
  err: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state, currentUser: payload.token };

      break;
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload.res));
      // payload.history.push("/Notes");
      return {
        ...state,
        loginStatus: true,
        currentUser: payload,
        loading: false,
        err: null,
      };
    case REGISTER_FAILURE:
      console.log("error catched", payload);
    case LOGIN_FAILURE:
      return { ...state, err: payload, loading: false };
    case LOGOUT:
      console.log("REACHED");
      localStorage.removeItem("user");
      return { ...state, currentUser: null };
    case GET_USER_SUCCESS:
      return { ...state, userInfo: payload.user };
    case GET_USER_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default reducer;
