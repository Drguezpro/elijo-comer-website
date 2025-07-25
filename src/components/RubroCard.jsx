// src/components/RubroCard.jsx
import React, { useState } from 'react'

export default function RubroCard({ rubro }) {
  const [open, setOpen] = useState(false)

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
          onClick={() => setOpen(true)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Ver más
        </button>
      </div>

      {/* Modal simple */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-auto max-w-md w-full h-3/4 p-6">
            <h2 className="text-xl font-bold mb-4">{rubro.nombre}</h2>
            {/* Aquí puedes mapear una lista de productos del rubro */}
            <p>Próximamente: detalles de {rubro.nombre}...</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
