import {ADD_NAME, ADD_CHILD} from '../actions/types'

const defaultState = {
  name:'',
  children: []
}
let currentIndex = 0

export function questionaireReducer(state = defaultState, action) {
  console.log(action)
  switch(action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name
      }
    case ADD_CHILD:
      let id = currentIndex
      currentIndex = currentIndex + 1
      let children = [...state.children]
      children.push(
        {
          id: id
        }
      )
      console.log(children)
      return {
        ...state,
        children
      }
  }
  return state
}