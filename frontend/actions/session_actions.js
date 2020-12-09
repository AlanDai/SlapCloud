import * as APIUtil from "../util/session_api_util";

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const fetchCurrentUser = (currentUser) => ({
  type: FETCH_CURRENT_USER,
  payload: currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  payload: errors,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((userRes) => dispatch(fetchCurrentUser(userRes)))
    .catch((errors) => dispatch(receiveSessionErrors(errors)));

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((user) => dispatch(fetchCurrentUser(user)))
    .catch((errors) => dispatch(receiveSessionErrors(errors)));

export const logout = () => (dispatch) =>
  APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser(user)))
    .catch((errors) => dispatch(receiveSessionErrors(errors)));
