export const PLAY_SLAP = 'PLAY_SONG';
export const playSlap = () => ({
  type: PLAY_SLAP
})

export const PAUSE_SLAP = 'PAUSE_SLAP';
export const pauseSlap = () => ({
  type: PAUSE_SLAP
})

export const RECEIVE_CURR_SLAP = 'RECEIVE_CURR_SLAP';
export const setCurrentSlap = slapId => ({
  type: RECEIVE_CURR_SLAP,
  payload: slapId
})

export const RECEIVE_PREV_SLAP = 'RECEIVE_PREV_SLAP';
export const fetchPreviousSlap = slapId => ({
  type: RECEIVE_PREV_SLAP,
  payload: slapId
})

export const RECEIVE_NEXT_SLAP = 'RECEIVE_NEXT_SLAP';
export const fetchNextSlap = slapId => ({
  type: RECEIVE_NEXT_SLAP,
  payload: slapId
})

export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const setQueue = slaps => ({
  type: RECEIVE_QUEUE,
  payload: slaps
})