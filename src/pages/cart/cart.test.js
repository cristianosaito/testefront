import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

import Cart from './index'

const mockStore = configureStore([])

const store = mockStore({})

test('Should match snapshot', () => {
  const container = render(
    <Provider store={store}>
      <Router>
        <Cart />
      </Router>
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
