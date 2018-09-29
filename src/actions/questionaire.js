import {ADD_NAME} from './types'

export function addName (name) {
  return dispatch => {
    dispatch({
      type: ADD_NAME,
      name: name
    })
  }
}