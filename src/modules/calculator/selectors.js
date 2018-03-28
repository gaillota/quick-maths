import { createSelector } from 'reselect'
import get from 'lodash/fp/get'
import last from 'lodash/fp/last'
import flow from 'lodash/fp/flow'
import takeRightWhile from 'lodash/fp/takeRightWhile'
import toString from 'lodash/fp/toString'

import { isOperator, reduceStack, transformOperators } from './helpers'

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
      return 0
    }
    
    return flow(transformOperators, reduceStack, toString)(stack)
  },
)

const makeResultDisplaySelector = () => createSelector(
  makeStackSelector(),
  makeComputedSelector(),
  makeOperationToStringSelector(),
  (stack, computed, string) => {
    // Prevent empty string for display
    if (!stack.length) {
      return 0
    }
    
    if (computed) {
      // eslint-disable-next-line
      return eval(string) // Oh well
    }
    
    return flow(takeRightWhile(e => !isOperator(e)), transformOperators, reduceStack)(stack)
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
