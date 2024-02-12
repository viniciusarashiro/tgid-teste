import React, { useState } from 'react'

export const Cart = () => {
  const [cart, setCart] = useState(() => {
    const itemsOnStorage = localStorage.getItem('cart')

    if (itemsOnStorage) {
      return JSON.parse(itemsOnStorage)
    }

    return []
  })

  function onItemRemove(id) {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => (
          <>
            <p key={item.id}>{item.name}</p> <p key={item.id}>{item.price}</p>{' '}
            <p>{item.quantity}</p>{' '}
            <button key={item.id} onClick={() => onItemRemove(item.id)}>
              remover item
            </button>
          </>
        ))
      ) : (
        <p>Carrinho vazio</p>
      )}
      <button onClick={() => alert('Deseja finalizar sua compra?')}>
        Finalizar compra
      </button>
    </>
  )
}
