import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Cart } from './Cart'
import '@testing-library/jest-dom'

describe('Cart', () => {
  test('renders Cart table', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )

    expect(screen.getByText('Produto')).toBeInTheDocument()
    expect(screen.getByText('Preço')).toBeInTheDocument()
    expect(screen.getByText('Quantidade')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
  })

  test('renders Cart button', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )

    expect(screen.getByText('Finalizar compra')).toBeInTheDocument()
  })
})
