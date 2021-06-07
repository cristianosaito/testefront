import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './infoTable.css'

const InfoTable = ({ products }) => {
  return (
    <div>
      <ul className="info-table">
        <li className="info">
          <div className="card">
            <p className="info-item">PRODUTOS</p>
            <p className="price">
              <CurrencyFormat
                value={products.subTotal}
                displayType="text"
                thousandSeparator="true"
                fixedDecimalScale
                decimalScale={2}
                decimalSeparator=","
                prefix="R$"
              />
            </p>
          </div>
        </li>
        <li className="info">
          <div className="card">
            <p className="info-item">FRETE</p>
            <p className="price">
              <CurrencyFormat
                value={products.shippingTotal}
                displayType="text"
                thousandSeparator="true"
                fixedDecimalScale
                decimalScale={2}
                decimalSeparator=","
                prefix="R$"
              />
            </p>
          </div>
        </li>
        <li className="info">
          <div className="card">
            <p className="info-item-orange">DESCONTO</p>
            <p className="price">
              <CurrencyFormat
                value={products.discount}
                displayType="text"
                thousandSeparator="true"
                fixedDecimalScale
                decimalScale={2}
                decimalSeparator=","
                prefix="R$"
              />
            </p>
          </div>
        </li>
        <li className="info">
          <div className="card">
            <p className="info-item-bold">TOTAL</p>
            <p className="price">
              <CurrencyFormat
                value={products.total}
                displayType="text"
                thousandSeparator="true"
                fixedDecimalScale
                decimalScale={2}
                decimalSeparator=","
                prefix="R$"
              />
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default InfoTable
