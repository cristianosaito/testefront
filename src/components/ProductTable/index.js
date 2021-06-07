/* eslint-disable react/jsx-boolean-value */
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './productTable.css'

const ProductTable = ({ items, showPrice }) => {
  if (items) {
    return (
      <div>
        <ul className="product-list">
          {items.map((item) => {
            return (
              <li key={item.product.sku} className="product">
                <div className="card">
                  <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
                  <p className="description">{item.product.name}</p>
                  {showPrice && (
                    <p className="price">
                      <CurrencyFormat
                        value={item.product.priceSpecification.price}
                        displayType="text"
                        thousandSeparator="true"
                        fixedDecimalScale={true}
                        decimalScale={2}
                        decimalSeparator=","
                        prefix="R$"
                      />
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  return null
}

export default ProductTable
