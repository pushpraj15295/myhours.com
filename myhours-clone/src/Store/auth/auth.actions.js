import axios from "axios";
import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await axios.post(
      `${process.env.BASE_Url}/user/login`,
      creds
    );

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await axios.post(
      `${process.env.BASE_Url}/user/register`,
      creds
    );

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};

