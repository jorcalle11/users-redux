export const ADD = 'PLUS';
export const SUBSTRACT = 'SUBSTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';

export function add(value){
  return {
    type: ADD,
    payload: value
  }
}

export function substract(value) {
  return {
    type: SUBSTRACT,
    payload: value
  }
}

export function multiply(value) {
  return {
    type: MULTIPLY,
    payload: value
  }
}

export function divide(value) {
  return {
    type: DIVIDE,
    payload: value
  }
}
