import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Products } from './Products'
import '@testing-library/jest-dom'

describe('Products', () => {
  test('renders products search input', () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    )

    expect(
      screen.getByPlaceholderText('Pesquisar produto...')
    ).toBeInTheDocument()
  })
})
