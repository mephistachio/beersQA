import React from 'react'
import ReactDOM from 'react-dom'
import './styled.css'
import App from './App'
import 'regenerator-runtime/runtime'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
