import * as users from '../actions/users';

function usersReducer(state=[],action) {
  switch (action.type) {
    case users.FETCH_USER:
    return state;
    break;
    case users.USER_PROMISE_FULLFILED:
      var newState = [];
      action.payload.map((data)=>{
        if (data.hasOwnProperty('name') && data.hasOwnProperty('age')){
          newState  = newState.concat(data);
        }
      });
      return newState;
      break;
    case users.USER_PROMISE_REJECTED:
      return state = {
        message: 'algun error ocurrió',
        error: action.payload.message
      };
      break;
    case users.SET_USER_NAME:
      state.map((user) => {
        if (user.name === action.payload.oldName) {
          user.name = action.payload.newName;
          return;
        }
      });
      return state = state;
      break;
    case users.ADD_USER:
      return state = state.concat(action.payload);
      break;
    case users.REMOVE_USER:
      var newState = [];
      state.map((user) => {
        if (user.id !== action.id){
          newState = newState.concat(user);
        }
      });
      return newState;
      break;
    default:
      return state;
  }
}

export default usersReducer;
