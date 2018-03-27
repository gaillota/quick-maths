import { combineReducers } from 'redux'

export default function createReducer() {
  return combineReducers({
    draft: (state = false, payload) => state,
  })
}
