import React from 'react'
import { useSelector } from 'react-redux'
import ProductTable from '../../components/ProductTable'
import InfoTable from '../../components/InfoTable'
import './checkout.css'

const Checkout = () => {
  const cart = useSelector((state) => state.cart[0])
  const card = useSelector((state) => state.card[0])

  if (!cart) {
    return (
      <div className="container">
        <h2>SACOLA VAZIA</h2>
      </div>
    )
  }

  if (!card) {
    return (
      <div className="container">
        <h2>FALTAM INFORMAÇÕES DE PAGAMENTO</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="success">
        <img src="/assets/images/success.png" alt="success" />
      </div>
      <h2>PAGAMENTO</h2>
      <div className="pagamento">
        <p>{card.cardNumber}</p>
        <p>{card.nome}</p>
        <p>{card.validade}</p>
      </div>
      <h2>PRODUTOS</h2>
      <ProductTable items={cart.items} showPrice={false} />
      <InfoTable products={cart} />
    </div>
  )
}

export default Checkout
