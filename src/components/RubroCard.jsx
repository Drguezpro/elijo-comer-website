// src/components/RubroCard.jsx
import React from 'react'

export default function RubroCard({ rubro, onVerMas }) {
  return (
    <div className="relative group">
      <img
        src={rubro.imagen}
        alt={rubro.nombre}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
        <h3 className="text-2xl font-bold mb-2">{rubro.nombre}</h3>
        <p className="text-sm mb-4 px-4 text-center">{rubro.descripcion}</p>
        <button
          onClick={onVerMas}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer"
        >
          Ver más
        </button>
      </div>
    </div>
  )
}
