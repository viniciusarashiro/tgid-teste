import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { api } from '../provider'

export const ProductDetails = () => {
  const params = useParams()

  const [product, setProduct] = useState(null)
  const [isInCart, setIsInCart] = useState(false)
  const fetchData = async () => {
    try {
      const response = await api.get(`/products/${params.id}`)
      const product = response.data
      setProduct(product)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()

    const itemsOnStorage = localStorage.getItem('cart')
    if (itemsOnStorage) {
      const cartItems = JSON.parse(itemsOnStorage)
      const itemInCart = cartItems.find((item) => item.id === params.id)
      setIsInCart(!!itemInCart)
    }
  }, [params.id])

  const [cart, setCart] = useState(() => {
    const itemsOnStorage = localStorage.getItem('cart')

    if (itemsOnStorage) {
      return JSON.parse(itemsOnStorage)
    }

    return []
  })

  function onCartAdd(item, quantity) {
    const newItem = { ...item, quantity: quantity }

    const cartItems = [...cart, newItem]

    setCart(cartItems)

    localStorage.setItem('cart', JSON.stringify(cartItems))

    setIsInCart(true)
  }

  function onCarRemove(id) {
    const cartItems = cart.filter((cart) => {
      return cart.id !== id
    })

    setCart(cartItems)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    setIsInCart(false)
  }

  return (
    <>
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>10</p>

          {isInCart ? (
            <button onClick={() => onCarRemove(product.id)}>
              Remover do carrinho
            </button>
          ) : (
            <button onClick={() => onCartAdd(product, 10)}>
              Adicionar ao carrinho
            </button>
          )}
        </>
      )}
    </>
  )
}
