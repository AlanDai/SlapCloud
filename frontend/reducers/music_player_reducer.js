// import {
//   PLAY_SONG,
//   PAUSE_SONG,
//   RECEIVE_QUEUE
// } from '/../actions/music_player_actions'

// const initialState = {
//   playing: false,
//   queue: [],
// }

// const musicPlayerReducer = (state = initialState, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case PLAY_SONG:
//       return Object.assign({}, state, {playing: true});
//     case PAUSE_SONG:
//       return Object.assign({}, state, {playing: false});
//     case RECEIVE_QUEUE:
//       const songs = Object.values(actions.songs);
//       const queue = songs.map(song => song.id)
//       return Object.assign({}, state, {queue: queue})
//     default:
//       return state
//   }
// }

// export default musicPlayerReducer