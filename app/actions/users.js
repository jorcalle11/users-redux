import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const SET_USER_NAME = 'SET_USER_NAME';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const USER_PROMISE_FULLFILED = 'USER_PROMISE_FULLFILED';
export const USER_PROMISE_REJECTED = 'USER_PROMISE_REJECTED';
const URL = 'http://rest.learncode.academy/api/wstern/users';

export function fetch_users(){
  return (dispatch)=> {
    axios.get(URL)
      .then((response) => {
        dispatch({type: USER_PROMISE_FULLFILED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: USER_PROMISE_REJECTED, payload: err});
      })
  }
}

export function setUserName(oldName, newName){
  return {
    type: SET_USER_NAME,
    payload: {
      oldName: oldName,
      newName: newName
    }
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      id: user.id,
      name: user.name,
      age: user.age
    }
  }
}

export function removeUser(id) {
  return {
    type: REMOVE_USER,
    id: id
  }
}
