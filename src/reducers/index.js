import { combineReducers } from 'redux'
import {loadingReducer} from './loadingReducer'
import {questionaireReducer} from './questionaireReducer'

export default combineReducers({
  loadingReducer,
  questionaireReducer
})
