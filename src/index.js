import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './index.css'
import theme from './theme'

const initialState = {}
const store = configureStore(initialState)

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
)
registerServiceWorker()
