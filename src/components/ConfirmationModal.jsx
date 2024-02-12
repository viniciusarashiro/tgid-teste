import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ConfirmationModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate()

  const confirmPurchase = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/20">
          <div className="bg-white rounded-xl p-20">
            <p className="mb-5">Deseja finalizar a compra?</p>
            <div className="flex gap-6">
              <button
                className="uppercase bg-red-400 p-4 rounded  hover:bg-red-600"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="uppercase bg-lime-400 p-4 rounded  hover:bg-lime-600"
                onClick={confirmPurchase}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
