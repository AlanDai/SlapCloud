import * as APIUtil from "../util/slap_api_util";

export const RECEIVE_SLAPS = "RECEIVE_SLAPS";
export const RECEIVE_SLAP = "RECEIVE_SLAP";

export const receiveSlaps = slaps => ({
  type: RECEIVE_SLAPS,
  paylod: { slaps },
})

export const receiveSlap = slap => ({
  type: RECEIVE_SLAP,
  paylod: { slap },
})

export const fetchAllSlaps = () => dispatch => (
  APIUtil.fetchSlaps()
  .then(slaps => dispatch(receiveSlaps(slaps)))
)

export const fetchSlap = slap => dispatch => (
  APIUtil.fetchSlap(slap.id)
  .then(slap => dispatch(receiveSlap(slap)))
)
