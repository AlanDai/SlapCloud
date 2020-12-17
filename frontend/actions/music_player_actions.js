
export const PLAY_SONG = 'PLAY_SONG';
export const playSlap = () => ({
  type: PLAY_SONG
})

export const PAUSE_SONG = 'PAUSE_SONG';
export const pauseSlap = () => ({
  type: PAUSE_SONG
})

export const RECEIVE_CURR_SONG = 'RECEIVE_CURR_SONG';
export const fetchCurrentSlap = songId => ({
  type: RECEIVE_CURR_SONG,
  payload: songId
})

export const RECEIVE_PREV_SONG = 'RECEIVE_PREV_SONG';
export const fetchPreviousSlap = songId => ({
  type: RECEIVE_PREV_SONG,
  payload: songId
})

export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
export const fetchNextSlap = songId => ({
  type: RECEIVE_NEXT_SONG,
  payload: songId
})

export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const fetchQueue = songs => ({
  type: RECEIVE_QUEUE,
  payload: songs
})