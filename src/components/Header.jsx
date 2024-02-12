import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <nav className="bg-slate-600">
        <ul className="flex flex-row justify-around p-4 align-middle">
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to={'/cart'}>Carrinho</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
