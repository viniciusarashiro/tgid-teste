import React from 'react'
import { Products } from './components/Products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
