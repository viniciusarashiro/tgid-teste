import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'
import '@testing-library/jest-dom'

describe('Products', () => {
  test('renders products search input', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByText('Produtos')).toBeInTheDocument()
    expect(screen.getByText('Carrinho')).toBeInTheDocument()
  })
})
