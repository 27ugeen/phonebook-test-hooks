import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const addUser = (_, { payload }) => payload.user;
const initialUserState = { name: '', email: '' };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: addUser,
  [authActions.loginSuccess]: addUser,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.deleteUserAccountSuccess]: () => initialUserState,
});

const addToken = (_, { payload }) => payload.token;

const token = createReducer(null, {
  [authActions.registerSuccess]: addToken,
  [authActions.loginSuccess]: addToken,
  [authActions.logoutSuccess]: () => null,
  [authActions.deleteUserAccountSuccess]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const addError = (_, { payload }) => {
  console.log(payload.message);
  // return payload.response.data._message;
  return payload.message;
};

const error = createReducer(null, {
  [authActions.registerError]: addError,
  [authActions.loginError]: addError,
  [authActions.logoutError]: addError,
  [authActions.getCurrentUserError]: addError,
  [authActions.deleteUserAccountError]: addError,

  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logoutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.deleteUserAccountRequest]: () => null,
});

export default combineReducers({
  user,
  token,
  loading,
  error,
});
