import reducer, { initialHistoryState } from '../reducers'
import { addToHistory, clearHistory, toggleHistory } from '../actions'

describe('History reducers', () => {
  test('should return initial state', () => {
    expect(reducer(undefined, { type: '@INIT' })).toEqual(initialHistoryState)
  })
  
  test('should handle TOGGLE_HISTORY', () => {
    const action = toggleHistory()
    const previousState = {
      enabled: false
    }
    const nextState = {
      enabled: true
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle ADD_TO_HISTORY', () => {
    const action = addToHistory([4, 5])
    const previousState = {
      operations: [
        [4, 5, 6]
      ]
    }
    const nextState = {
      operations: [
        [4, 5, 6],
        [4, 5]
      ]
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle CLEAR_HISTORY', () => {
    const action = clearHistory()
    const previousState = {
      operations: [
        [4, 5]
      ]
    }
    const nextState = {
      operations: []
    }
  
    expect(reducer(previousState, action)).toEqual(nextState)
  })
})
