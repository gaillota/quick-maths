import set from 'lodash/fp/set'
import get from 'lodash/fp/get'
import concat from 'lodash/fp/concat'
import _ from 'lodash/fp/placeholder'
import update from 'lodash/fp/update'

import { ADD_TO_HISTORY, CLEAR_HISTORY, TOGGLE_HISTORY, } from './constants'

export const initialHistoryState = {
  operations: [],
  enabled: false,
}

function historyReducer(state = initialHistoryState, action) {
  switch (action.type) {
    case TOGGLE_HISTORY:
      return set('enabled', !get('enabled')(state))(state)
    case ADD_TO_HISTORY:
      return update('operations', concat(_, [action.payload]), state)
    case CLEAR_HISTORY:
      return set('operations', [])(state)
    default:
      return state
  }
}

export default historyReducer
