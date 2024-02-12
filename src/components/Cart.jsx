import React, { useEffect, useState } from 'react'

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

  function handleUpdateItem(item, action) {
    let newQuantity = item.quantity

    if (action === 'decrease') {
      if (newQuantity === 1) {
        return
      }
      newQuantity -= 1
    }

    if (action === 'increase') {
      newQuantity += 1
    }

    const newData = { ...item, quantity: newQuantity }

    const updatedCart = cart.map((item) => {
      if (item.id === newData.id) {
        return newData
      }
      return item
    })

    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  function getTotal() {
    let total = 0

    cart.forEach((item) => {
      total = total + item.price * item.quantity
    })

    return total
  }

  const total = getTotal()

  return (
    <div className="grid md:grid-cols-2">
      <div className="overflow-x-auto mb-10 md:overflow-x-visible">
        <table className="as m-10">
          <thead>
            <tr className="p-4">
              <th className="px-4 py-2">Produto</th>
              <th className="px-4 py-2">Preço</th>
              <th className="px-4 py-2">Quantidade</th>
              <th className="px-4 py-2">Total:</th>
            </tr>
          </thead>
          {cart.length > 0 ? (
            cart.map((item) => (
              <tbody key={item.id}>
                <tr className="border-t">
                  <td className="p-8">{item.name}</td>
                  <td>R$ {item.price}</td>
                  <td className="p-8">
                    <button onClick={() => handleUpdateItem(item, 'decrease')}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleUpdateItem(item, 'increase')}>
                      +
                    </button>
                  </td>
                  <td>R$ {(item.quantity * item.price).toFixed(2)}</td>
                  <td className="p-8">
                    <div className="flex justify-center items-center">
                      <button
                        className="uppercase  bg-red-400 p-4 rounded hover:bg-red-600"
                        onClick={() => onItemRemove(item.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tr>
              <td colSpan="4">Carrinho vazio</td>
            </tr>
          )}
        </table>
      </div>

      <div className="flex items-center mx-auto">
        {cart.length > 0 ? (
          <div>
            <p className="mb-4">Total: R$ {total}</p>
            <button
              className="uppercase bg-lime-400 p-4 rounded  hover:bg-lime-600"
              onClick={() => alert('Deseja finalizar sua compra?')}
            >
              Finalizar compra
            </button>
          </div>
        ) : (
          <button className=" bg-gray-300 text-gray-600 uppercase p-4 rounded  cursor-not-allowed">
            Finalizar compra
          </button>
        )}
      </div>
    </div>
  )
}
