import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Payment from './pages/payment'
import Error from './pages/404'
import Header from './components/Header'

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/payment" component={Payment} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/*" component={Error} />
    </Switch>
  </Router>
)

export default Routes
