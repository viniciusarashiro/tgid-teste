import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = (props) => {
  const navigate = useNavigate()

  const handleNavigate = (event) => {
    event.preventDefault()
    navigate(`${props.item.id}`)
  }

  return (
    <div className="rounded-md flex flex-col bg-slate-400 p-5 gap-3 overflow-hidden relative text-center hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-900">
        {props.item.name}
      </span>
      <img className="w-24 mx-auto" src={props.item.image} alt="" />
      <p className="text-sm leading-6 text-slate-900">R$ {props.item.price}</p>
      <button onClick={handleNavigate}>Ver detalhes</button>
    </div>
  )
}
