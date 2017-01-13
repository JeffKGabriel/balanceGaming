let initState = []

export default function rosterReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_PLAYER':{
      const newPlayer = action.data;
      return state.concat(newPlayer);
     }
    case 'initPlayer':
      return state
    default:
      return state
  }
}
