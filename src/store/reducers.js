import { combineReducers } from 'redux'

import calculator from '../modules/calculator/reducers'
import history from '../modules/history/reducers'

export default function createReducer() {
  return combineReducers({
    calculator,
    history
  })
}
