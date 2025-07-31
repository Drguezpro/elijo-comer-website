// src/components/DetalleRubro.jsx
import React, { useEffect, useRef } from 'react'
import productosData from '../data/productos'

export default function DetalleRubro({ rubro, onBack }) {
  const sectionRef = useRef(null)

  // Al montar, scroll al top de esta sección
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const items = productosData[rubro] || []

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-screen bg-gray-950 bg-marca-agua bg-cover bg-center bg-fixed py-16 px-6 text-white"
    >
      

      {/* Título principal */}
      <h2
        className="text-4xl font-bold mb-12"
        style={{ fontFamily: 'LoveloLine' }}
      >
        {rubro}
      </h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 -gap-4">
        {items.map(({ img, name, desc }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="w-full max-w-lg aspect-w-4 aspect-h-3 mb-4">
          <img
            src={img}
            alt={name}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            <p className="text-center px-4 mb-4 max-w-lg">{desc}</p>
          </div>
        ))}
      </div>

{/* Botón Volver */}
      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="bg-[#f4b702] text-black px-4 py-2 rounded hover:bg-yellow-400 transition cursor-pointer mr-20"
        >
          ← Volver
        </button>
      </div>


    </section>
  )
}
