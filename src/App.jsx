import React from 'react'
import { Products } from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductDetails } from './components/ProductDetails'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
