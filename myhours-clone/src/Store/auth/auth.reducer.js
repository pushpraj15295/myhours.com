import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_LOADING,
} from "./auth.types";

let token = localStorage.getItem("token");
let init = {
  loading: false,
  error: false,
  success: false,
  token: token,
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    }
    case AUTH_REGISTER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }

      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        token: payload.token,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
      };
    }
    case AUTH_REGISTER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
