/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux'

import createReducer from './reducers'

export default function configureStore(initialState = {}) {
  const appReducer = createReducer()
  
  const middlewares = [
    // App middlewares
  ]
  
  const enhancers = [applyMiddleware(...middlewares)]
  
  // use Redux DevTools Chrome extension if available
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  
  return createStore(appReducer, initialState, composeEnhancers(...enhancers))
}
