import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user,
})

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))
)
