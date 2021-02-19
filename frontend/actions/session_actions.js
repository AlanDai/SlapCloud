import * as APIUtil from "../util/session_api_util";

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const RECEIVE_EMAIL_CHECK = "RECEIVE_EMAIL_CHECK";
export const REMOVE_EMAIL_CHECK = "REMOVE_EMAIL_CHECK";

export const fetchCurrentUser = (payload) => ({
  type: FETCH_CURRENT_USER,
  payload: payload.user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  payload: errors,
});

const receiveEmailCheck = (email, emailExists) => ({
  type: RECEIVE_EMAIL_CHECK,
  payload: { email, emailExists }
});

export const emailUncheck = () => ({
  type: REMOVE_EMAIL_CHECK,
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const emailCheck = (email) => (dispatch) =>
  APIUtil.checkEmail(email).then((emailExists) =>
    dispatch(receiveEmailCheck(email, emailExists.emailExists))
  );

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((userRes) => dispatch(fetchCurrentUser(userRes)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((user) => dispatch(fetchCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )

export const logout = () => (dispatch) =>
  APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )