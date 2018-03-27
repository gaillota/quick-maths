import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

import './index.css'

const initialState = {}
const store = configureStore(initialState)

const MOUNT_NODE = document.getElementById('root')

const theme = {
  sizes: {
    gap: '32',
    breakpoints: {
      tablet: '',
      desktop: '1024',
      large: '1216',
      full: '1408',
    },
  },
  colors: {
    background: '#EBEDF2',
    primary: '#2F3139',
    secondary: '#EBEDF2',
    white: '#FFF',
    
    light: 'rgba(0, 0, 0, 0.3)',
    grey: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
)
registerServiceWorker()
