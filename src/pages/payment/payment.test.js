import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'
import stateMock from '../../shared/mocks/state.mock'

import Payment from './index'

const mockStore = configureStore([])

const initialStore = stateMock

const store = mockStore(initialStore)

test('Should match snapshot', () => {
  const container = render(
    <Provider store={store}>
      <Router>
        <Payment />
      </Router>
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
