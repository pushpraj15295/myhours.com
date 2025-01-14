import axios from "axios";
import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_LOADING,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/login`,
      creds
    );

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_REGISTER_LOADING });
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/register`,
      creds
    );
    dispatch({ type: AUTH_REGISTER_SUCCESS, payload: response });
  } catch (err) {
    console.log(err);
    dispatch({ type: AUTH_REGISTER_ERROR });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};
