import { combineReducers } from 'redux'
import Students from './students'

const allReducers = combineReducers({
  studReducer: Students,
})

export default allReducers
