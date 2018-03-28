import set from 'lodash/fp/set'
import update from 'lodash/fp/update'
import concat from 'lodash/fp/concat'
import _ from 'lodash/fp/placeholder'
import identity from 'lodash/fp/identity'

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

const initialCalculatorState = {
  stack: [],
  comma: false,
  computed: false,
  currentOperator: null,
}

function calculatorReducer(action) {
  switch (action.type) {
    case STACK_ADD:
      return update('stack', concat(_, action.payload))
    case STACK_RESET:
      return set('stack', [])
    case SET_COMMA:
      return set('comma', action.payload)
    case RESET_COMMA:
      return set('comma', false)
    case COMPUTE:
      return set('computed', true)
    case RESET_COMPUTE:
      return set('computed', false)
    case SET_CURRENT_OPERATOR:
      return set('currentOperator', action.payload)
    case RESET_CURRENT_OPERATOR:
      return set('currentOperator', null)
    default:
      return identity
  }
}

// Just trying something new here
const injectState = (reducer) => (state = initialCalculatorState, action) => reducer(action)(state)

export default injectState(calculatorReducer)
