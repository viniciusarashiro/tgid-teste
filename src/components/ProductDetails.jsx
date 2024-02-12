import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { api } from '../provider'

export const ProductDetails = () => {
  const params = useParams()

  const [product, setProduct] = useState(null)

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
  }, [])

  return (
    <>
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.price}</p>

          <button>Adicionar ao carrinho</button>
        </>
      )}
    </>
  )
}
