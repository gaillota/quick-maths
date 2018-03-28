import { createAction } from 'redux-actions'

import {
  COMPUTE,
  RESET_COMMA,
  RESET_COMPUTE,
  RESET_CURRENT_OPERATOR,
  SET_COMMA,
  SET_CURRENT_OPERATOR,
  STACK_ADD,
  STACK_RESET,
} from './constants'
import {
  makeCommaSelector,
  makeComputedSelector,
  makeCurrentOperatorSelector,
  makeLastEntitySelector,
  makeStackSelector,
} from './selectors'
import { isClear, isComma, isCompute, isOperator } from './helpers'
import { addToHistory } from '../history/actions'
import { makeEnableSelector } from '../history/selectors'

// Sync actions
const addToStack = createAction(STACK_ADD)
const resetStack = createAction(STACK_RESET)

const setComma = createAction(SET_COMMA)
const resetComma = createAction(RESET_COMMA)

const setCurrentOperator = createAction(SET_CURRENT_OPERATOR)
const resetCurrentOperator = createAction(RESET_CURRENT_OPERATOR)

const compute = createAction(COMPUTE)
const resetCompute = createAction(RESET_COMPUTE)

// Async actions (requires redux-thunk)
const digitHandler = (digit) => (dispatch, getState) => {
  const state = getState()
  const currentOperator = makeCurrentOperatorSelector()(state)
  const computed = makeComputedSelector()(state)
  const lastEntity = makeLastEntitySelector()(state)
  
  // Prevent multiple 0
  if (digit === 0 && lastEntity === 0) {
    return
  }
  
  if (computed) {
    dispatch(resetStack())
    dispatch(resetCompute())
  }
  if (currentOperator) {
    dispatch(addToStack(currentOperator))
    dispatch(resetCurrentOperator())
  }
  dispatch(addToStack(digit))
}

const operatorHandler = (operator) => (dispatch, getState) => {
  const state = getState()
  const currentOperator = makeCurrentOperatorSelector()(state)
  const lastEntity = makeLastEntitySelector()(state)
  const computed = makeComputedSelector()(state)
  const comma = makeCommaSelector()(state)
  
  if (currentOperator || computed || !lastEntity) {
    return
  }
  
  dispatch(setCurrentOperator(operator))
  if (comma) {
    dispatch(resetComma())
  }
}

const commaHandler = (key) => (dispatch, getState) => {
  const state = getState()
  const comma = makeCommaSelector()(state)
  const lastEntity = makeLastEntitySelector()(state)
  const computed = makeComputedSelector()(state)
  
  if (!comma) {
    if (!lastEntity || computed) {
      // Simulate click to prepend 0
      digitHandler(0)(dispatch, getState)
    }
    dispatch(addToStack(key))
    dispatch(setComma(true))
  }
}

const clearHandler = () => (dispatch) => {
  dispatch(resetStack())
  dispatch(resetComma())
  dispatch(resetCurrentOperator())
}

const equalHandler = () => (dispatch, getState) => {
  const state = getState()
  const stack = makeStackSelector()(state)
  const history = makeEnableSelector()(state)
  const computed = makeComputedSelector()(state)
  
  if (computed) {
    return
  }
  
  if (history) {
    dispatch(addToHistory(stack))
  }
  
  dispatch(compute())
  dispatch(resetComma())
  dispatch(resetCurrentOperator())
}

export const keyPress = (key) => {
  // Digit pressed
  if (/[0-9]/.test(key)) {
    return digitHandler(key)
  }
  
  // Operator pressed
  if (isOperator(key)) {
    return operatorHandler(key)
  }
  
  // Comma pressed
  if (isComma(key)) {
    return commaHandler(key)
  }
  
  // C pressed
  if (isClear(key)) {
    return clearHandler(key)
  }
  
  // Equal pressed
  if (isCompute(key)) {
    return equalHandler()
  }
}
