import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Products } from './Products'
import '@testing-library/jest-dom'

describe('Visualize my courses', () => {
  test('renders products input search', () => {
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
