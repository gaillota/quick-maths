import { createAction } from 'redux-actions'

import { TOGGLE_HISTORY, ADD_TO_HISTORY, CLEAR_HISTORY } from './constants'

// Sync actions
export const toggleHistory = createAction(TOGGLE_HISTORY)
export const addToHistory = createAction(ADD_TO_HISTORY)
export const clearHistory = createAction(CLEAR_HISTORY)
