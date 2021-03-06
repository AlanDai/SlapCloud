import * as APIUtil from "../util/slap_api_util";

export const RECEIVE_SLAPS = "RECEIVE_SLAPS";
export const RECEIVE_SLAP = "RECEIVE_SLAP";

export const receiveSlaps = slaps => ({
  type: RECEIVE_SLAPS,
  payload: { slaps },
})

export const receiveSlap = slap => ({
  type: RECEIVE_SLAP,
  payload: { slap },
})

export const fetchSlaps = () => dispatch => (
  APIUtil.fetchSlaps()
  .then(slaps => dispatch(receiveSlaps(slaps)))
)

export const fetchSlap = slapId => dispatch => (
  APIUtil.fetchSlap(slapId)
  .then(slap => dispatch(receiveSlap(slap)))
)
