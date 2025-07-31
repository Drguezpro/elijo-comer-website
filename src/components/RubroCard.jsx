// src/components/RubroCard.jsx
import React from 'react'

export default function RubroCard({ rubro, onVerMas }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      {/* Imagen clickeable */}
      <img
        src={rubro.imagen}
        alt={rubro.nombre}
        className="w-full h-64 object-cover rounded-lg cursor-pointer"
        onClick={onVerMas}
      />

      {/* Overlay para desktop: invisible por defecto, visible on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 pointer-events-none transition-opacity duration-300 rounded-lg group-hover:opacity-100 group-hover:pointer-events-auto">
        <h3 className="text-2xl font-bold text-white mb-2">{rubro.nombre}</h3>
        <p className="text-sm text-white mb-4 px-4">{rubro.descripcion}</p>
        <button
          onClick={onVerMas}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer"
        >
          Ver más
        </button>
      </div>

      {/* Caption mobile: siempre visible bajo la imagen */}
      <div className="mt-2 p-4 bg-black bg-opacity-50 text-white rounded-b-lg md:hidden">
        <h3 className="text-xl font-bold">{rubro.nombre}</h3>
        <p className="mt-2 text-sm">{rubro.descripcion}</p>
      </div>
    </div>
  )
}
