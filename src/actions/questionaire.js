import {ADD_NAME, ADD_CHILD, UPDATE_CHILD} from './types'

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

export function updateChild(name) {
  return dispatch => {
    dispatch(
      {
        type: UPDATE_CHILD,
        name: name
      }
    )
  }
}