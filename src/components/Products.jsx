import React, { useEffect, useState } from 'react'
import { Product } from './Product'
import { api } from '../provider'

export const Products = () => {
  const fetchData = async () => {
    try {
      const response = await api.get('/products')
      const newProducts = response.data
      setProducts([...products, ...newProducts])
    } catch (error) {
      console.error(error)
    }
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  console.log(products)
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <form className="w-full">
        <input
          type="text"
          placeholder="Pesquisar um produto..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-950"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-4 gap-6 auto-rows-[250px]">
        {products &&
          products.map((item) => <Product key={item.id} item={item} />)}
      </div>
    </div>
  )
}
