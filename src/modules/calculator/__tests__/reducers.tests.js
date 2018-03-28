import reducer, { initialCalculatorState } from '../reducers'
import {
  addToStack, compute, resetComma, resetCompute, resetCurrentOperator, resetStack, setComma,
  setCurrentOperator,
} from '../actions'
import { OPERATORS } from '../../../constants'

describe('stack add action', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: '@INIT' })).toEqual(initialCalculatorState)
  })
  
  test('should handle STACK_ADD', () => {
    const action = addToStack(4)
    const previousState = { stack: [4, 5] }
    const nextState = {
      stack: [4, 5, 4],
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle STACK_RESET', () => {
    const action = resetStack()
    const previousState = { stack: [4, 5] }
    const nextState = {
      stack: []
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle SET_COMMA', () => {
    const action = setComma(true)
    const previousState = {
      comma: false
    }
    const nextState = {
      comma: true
    }
  
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle RESET_COMMA', () => {
    const action = resetComma()
    const previousState = {
      comma: true
    }
    const nextState = {
      comma: false
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle COMPUTE', () => {
    const action = compute()
    const previousState = {
      computed: false
    }
    const nextState = {
      computed: true
    }
  
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle RESET_COMPUTE', () => {
    const action = resetCompute()
    const previousState = {
      computed: true
    }
    const nextState = {
      computed: false
    }
  
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle SET_CURRENT_OPERATOR', () => {
    const action = setCurrentOperator(OPERATORS.ADD)
    const previousState = {
      currentOperator: null,
    }
    const nextState = {
      currentOperator: OPERATORS.ADD
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
  
  test('should handle RESET_CURRENT_OPERATOR', () => {
    const action = resetCurrentOperator(OPERATORS.ADD)
    const previousState = {
      currentOperator: OPERATORS.ADD,
    }
    const nextState = {
      currentOperator: null
    }
    
    expect(reducer(previousState, action)).toEqual(nextState)
  })
})
