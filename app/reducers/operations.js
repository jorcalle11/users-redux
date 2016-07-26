import * as operations from '../actions/operations';

function operationsReducer(state= 0, action) {
  switch(action.type) {
    case operations.ADD:
      return state+action.payload
      break;
    case operations.SUBSTRACT:
      return state-action.payload
      break;
    case operations.MULTIPLY:
      return state*action.payload
      break;
    case operations.DIVIDE:
      if (action.payload > 0) {
        return state / action.payload
      }
      return state
      break;
    default:
      return state
  }
}

export default operationsReducer;
