import { combineReducers } from 'redux'

import cart from './cart/reducer'
import card from './card/reducer'

export default combineReducers({
  cart,
  card
})
