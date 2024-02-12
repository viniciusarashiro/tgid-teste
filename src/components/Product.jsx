import React from 'react'

export const Product = () => {
  return (
    <div className="rounded-md flex flex-col bg-slate-400 p-5 gap-3 overflow-hidden relative text-center hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-900">titulo</span>
      <p className="text-sm leading-6 text-slate-900">Preço</p>
      <button>Ver detalhes</button>
    </div>
  )
}
