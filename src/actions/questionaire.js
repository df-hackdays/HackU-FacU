import {ADD_NAME, ADD_CHILD, UPDATE_CHILD, SELECT_CHILD} from './types'

export function addName (name) {
  return dispatch => {
    dispatch({
      type: ADD_NAME,
      name: name
    })
  }
}

export function addChild() {
  return dispatch => {
    dispatch(
      {
        type: ADD_CHILD
      }
    )
  }
}

export function updateChild(key, value) {
  return dispatch => {
    dispatch(
      {
        type: UPDATE_CHILD,
        key: key,
        value: value
      }
    )
  }
}

export function selectChild(name) {
  return dispatch => {
    dispatch(
      {
        type: SELECT_CHILD,
        name: name
      }
    )
  }
}