let initState = []

export default function newsReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_NEWS':{
      const newArticle = action.data;
      return state.concat(newArticle);
     }
    case 'init':
      return state
    default:
      return state
  }
}
