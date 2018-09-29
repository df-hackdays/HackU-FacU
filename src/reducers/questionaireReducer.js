import {ADD_NAME, ADD_CHILD, UPDATE_CHILD} from '../actions/types'

const defaultState = {
  name:'',
  children: []
}
let currentIndex = 0

export function questionaireReducer(state = defaultState, action) {
  console.log(action)

  let children = [...state.children]
  switch(action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name
      }
    case ADD_CHILD:
      let id = currentIndex
      currentIndex = currentIndex + 1
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
    case UPDATE_CHILD:
      children[children.length - 1].name = action.name
      return {
        ...state,
        children
      }
  }
  return state
}