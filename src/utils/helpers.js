import { bindActionCreators } from 'redux'

export const bindActionsToDispatch = (actions) => (dispatch) => bindActionCreators(actions, dispatch)

// Just trying something new here
export const injectState = (reducer, initialState) => (state = initialState, action) => reducer(action)(state)
