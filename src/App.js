import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
)

export default App
