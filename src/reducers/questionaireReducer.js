import {ADD_NAME} from '../actions/types'

const defaultState = {
  name:'',
  children: []
}


export function questionaireReducer(state = defaultState, action) {
  switch(action) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name
      }
  }
  return state
}