import { createSelector } from 'reselect'
import get from 'lodash/fp/get'

const stateSelector = get('history')

const makeEnableSelector = () => createSelector(
  stateSelector,
  get('enabled')
)

const makeOperationsSelector = () => createSelector(
  stateSelector,
  get('operations')
)

export {
  makeEnableSelector,
  makeOperationsSelector
}
