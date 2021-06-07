import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Btn = styled.button`
  color: #fff;
  background-color: #ff6c00;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid #ff6c00;
  border-radius: 3px;
  width: 100%;
  height: 60px;
  cursor: pointer;
`

const NavLinkButton = () => (
  <div>
    <NavLink activeClassName="active" to="/payment">
      <Btn>SEGUIR PARA O PAGAMENTO</Btn>
    </NavLink>
  </div>
)

export default NavLinkButton
