import uid from 'uid';
import {ADD, REMOVE} from '../actions/tweet';

let initialState = {
  id: uid(),
  user: 'jomaca',
  age: 24,
  tweets: [
    'primer tweet',
    'segundo tweet'
  ]
}

function tweetsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state = Object.assign({},state, {
        tweets : state.tweets.concat([action.payload])
      });
      break;
    case REMOVE:
      return state = Object.assign({},state, {
        tweets: state.tweets.filter((tweet) => tweet !== action.payload)
      });
      break;
    default:
      return state;
  }
}

export default tweetsReducer;
