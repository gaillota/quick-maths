import {
  makeCommaSelector,
  makeComputedSelector,
  makeCurrentOperatorSelector,
  makeLastEntitySelector, makeOperationToStringSelector, makeResultDisplaySelector,
  makeStackSelector,
} from '../selectors'
import { ACTIONS, OPERATORS } from '../../../constants'

const getState = (state) => ({ calculator: state })

describe('stack selector', () => {
  test('should return stack state', () => {
    const expected = []
    const state = getState({
      stack: expected,
    })
    const stackSelector = makeStackSelector()
    
    expect(stackSelector(state)).toEqual(expected)
  })
})

describe('comma selector', () => {
  test('should return comma state', () => {
    const expected = true
    const state = getState({
      comma: expected,
    })
    const commaSelector = makeCommaSelector()
    
    expect(commaSelector(state)).toEqual(expected)
  })
})

describe('computed selector', () => {
  test('should return computed state', () => {
    const expected = true
    const state = getState({
      computed: expected,
    })
    const computedSelector = makeComputedSelector()
    
    expect(computedSelector(state)).toEqual(expected)
  })
})

describe('current operator selector', () => {
  test('should return current operator state', () => {
    const expected = OPERATORS.DIVIDE
    const state = getState({
      currentOperator: expected,
    })
    const currentOperatorSelector = makeCurrentOperatorSelector()
    
    expect(currentOperatorSelector(state)).toEqual(expected)
  })
})

describe('last entity selector', () => {
  test('should return last entity of the stack', () => {
    const expected = 3
    const stack = [5, 4, expected]
    const state = getState({
      stack,
    })
    const lastEntitySelector = makeLastEntitySelector()
    
    expect(lastEntitySelector(state)).toEqual(expected)
  })
})

describe('operation to string selector', () => {
  test('should return correct string associated with simple stack', () => {
    const expected = '2+2/4'
    const stack = [2, OPERATORS.ADD, 2, OPERATORS.DIVIDE, 4]
    const state = getState({
      stack
    })
    const operationToStringSelector = makeOperationToStringSelector()
    
    expect(operationToStringSelector(state)).toEqual(expected)
  })
})

describe('result display selector', () => {
  const resultDisplaySelector = makeResultDisplaySelector()
  
  test('should return 0', () => {
    const expected = 0
    const stack = []
    const state = getState(({
      stack
    }))
    
    expect(resultDisplaySelector(state)).toEqual(expected)
  })
  
  test('should return computed stack with correct result', () => {
    const expected = 57.4
    const stack = [4, OPERATORS.SUBTRACT, 3, OPERATORS.ADD, 5, 6, ACTIONS.COMMA, 4]
    const state = getState({
      stack,
      computed: true
    })
    
    expect(resultDisplaySelector(state)).toEqual(expected)
  })
  
  test('should return correct result', () => {
    const expected = '9.9'
    const stack = [4, 4, OPERATORS.ADD, 9, ACTIONS.COMMA, 9]
    const state = getState({
      stack
    })
    
    expect(resultDisplaySelector(state)).toEqual(expected)
  })
})
