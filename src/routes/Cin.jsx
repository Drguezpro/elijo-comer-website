// 3. src/routes/CinConC.jsx
import React from 'react'

export default function CinConC() {
  return (
    <section className="w-full bg-gray-950/80 text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'LoveloLine' }}>
        Cin con “C”
      </h2>
      <p className="mb-4 max-w-3xl">
        “Cin” es un guiño a nuestra fundadora, Cintia, y la “C” extra simboliza la calidad que nos define.  
      </p>
      {/* Aquí podés reemplazar por un video o animación */}
      <div className="mt-8">
        <img src="/placeholder-cin.gif" alt="Animación Cin" className="mx-auto w-64" />
      </div>
      <button className="mt-10 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
        Ver Menú
      </button>
    </section>
  )
}
