import {combineReducers} from 'redux';
import operationsReducer from './operations';
import tweetsReducer from './tweets';
import usersReducer from './users';

export default combineReducers({
  operations: operationsReducer,
  tweets: tweetsReducer,
  users: usersReducer
});
