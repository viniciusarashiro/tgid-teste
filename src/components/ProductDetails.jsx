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

  function onCartAdd(item) {
    const newItem = { ...item }

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
          <div className="md:grid flex flex-col  md:grid-cols-2  gap-6 auto-rows-[350px] mt-16  justify-center items-center">
            <img className="w-48 mx-auto border" src={product.image} alt="" />
            <div>
              <h1 className="uppercase font-bold text-lg mb-6">
                {product.name}
              </h1>

              <p className="mb-6">Preço: R$ {product.price}</p>

              {isInCart ? (
                <button
                  className="uppercase  bg-red-400 p-4 rounded hover:bg-red-600"
                  onClick={() => onCarRemove(product.id)}
                >
                  Remover do carrinho
                </button>
              ) : (
                <button
                  className="uppercase bg-lime-400 p-4 rounded  hover:bg-lime-600"
                  onClick={() => onCartAdd(product)}
                >
                  Adicionar ao carrinho
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
