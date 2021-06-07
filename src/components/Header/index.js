import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => (
  <div>
    <nav>
      <ul className="menu">
        <li className="item ">
          <NavLink to="/cart" activeClassName="active">
            SACOLA
          </NavLink>
        </li>
        <li className="item">
          <NavLink activeClassName="active" to="/payment">
            PAGAMENTO
          </NavLink>
        </li>
        <li className="item">
          <NavLink activeClassName="active" to="/checkout">
            CONFIRMAÇÃO
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
