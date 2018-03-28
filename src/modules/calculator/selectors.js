import { createSelector } from 'reselect'
import get from 'lodash/fp/get'
import last from 'lodash/fp/last'
import flow from 'lodash/fp/flow'
import takeRightWhile from 'lodash/fp/takeRightWhile'
import join from 'lodash/fp/join'

import { cleanOperation, isOperator, reduceOperation } from './helpers'

const stateSelector = get('calculator')

const makeStackSelector = () => createSelector(
  stateSelector,
  get('stack'),
)

const makeCommaSelector = () => createSelector(
  stateSelector,
  get('comma'),
)

const makeComputedSelector = () => createSelector(
  stateSelector,
  get('computed'),
)

const makeCurrentOperatorSelector = () => createSelector(
  stateSelector,
  get('currentOperator'),
)

const makeLastEntitySelector = () => createSelector(
  makeStackSelector(),
  last,
)

const makeOperationToStringSelector = () => createSelector(
  makeStackSelector(),
  (stack) => {
    // Prevent empty string for display
    if (!stack.length) {
      return '0'
    }
    
    return flow(cleanOperation, reduceOperation())(stack)
  },
)

const makeResultDisplaySelector = () => createSelector(
  makeStackSelector(),
  makeOperationToStringSelector(),
  makeComputedSelector(),
  (stack, string, computed) => {
    // Prevent empty string for display
    if (!stack.length) {
      return '0'
    }
    
    if (computed) {
      return eval(string) // Oh well
    }

    return flow(takeRightWhile(isOperator), cleanOperation, join(''))(stack)
  },
)

export {
  makeLastEntitySelector,
  makeCommaSelector,
  makeStackSelector,
  makeOperationToStringSelector,
  makeResultDisplaySelector,
  makeComputedSelector,
  makeCurrentOperatorSelector,
}
