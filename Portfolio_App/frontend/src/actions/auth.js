import axios from 'axios';
import { returnErrors } from './messages';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const signin = (username, password) => (dispatch) => {
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/signin', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// User Signup
export const signup = ({ username, password, email }) => (dispatch) => {
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  axios
    .post('/api/auth/signup', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT 
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then(console.log('logout'))
    .then((res) => {
      dispatch({ type: 'CLEAR_POSITIONS' });
      dispatch({ type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token
export const tokenConfig = (getState) => {
  
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};