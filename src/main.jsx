import { createStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.scss'
import { reducer } from './redux/reducers.jsx'

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
