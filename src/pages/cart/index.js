import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductTable from '../../components/ProductTable'
import InfoTable from '../../components/InfoTable'
import NavLinkButton from '../../components/NavLinkButton'
import './cart.css'
import productService from '../../services/product.service'

const Cart = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState({})

  const handleProducts = (cart) => {
    dispatch({
      type: 'ADD_PRODUCTS',
      cart
    })
  }

  const loadProducts = async () => {
    const response = await productService.get()
    setProducts(response.data)
    handleProducts(response.data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="container">
      <h2>PRODUTOS</h2>
      <ProductTable items={products.items} showPrice />
      <InfoTable products={products} />
      <NavLinkButton />
    </div>
  )
}

export default Cart
