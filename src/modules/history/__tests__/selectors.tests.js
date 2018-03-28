import { makeEnableSelector, makeOperationsSelector } from '../selectors'

const getState = (state) => ({ history: state })

describe('History selector', () => {
  test('should return enabled state', () => {
    const expected = false
    const state = getState({
      enabled: expected,
    })
    const enableSelector = makeEnableSelector()
    
    expect(enableSelector(state)).toEqual(expected)
  })
  
  test('should return operations state', () => {
    const expected = [
      [4, 5, 6],
      [4, 5]
    ]
    const state = getState({
      operations: expected
    })
    const operationsSelector = makeOperationsSelector()
    
    expect(operationsSelector(state)).toEqual(expected)
  })
})
