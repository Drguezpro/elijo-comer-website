// 5. src/routes/Franquicias.jsx
import React from 'react'

export default function Franquicias() {
  return (
    <section className="w-full bg-gray-950/80 text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'LoveloLine' }}>
        Franquicias
      </h2>
      <p className="mb-6 max-w-3xl">
        Sé tu propio jefe con Elijo Comer: modelo probado, formación continua y apoyo total.  
      </p>
      <ul className="list-disc list-inside mb-6 max-w-3xl">
        <li>Reducción de riesgos gracias a una marca establecida.</li>
        <li>Soporte permanente y capacitación inicial.</li>
        <li>Economías de escala en insumos y marketing centralizado.</li>
        <li>Receta exclusiva de papas y blend de carne sin aditivos.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4">Proceso de franquicia</h3>
      <ol className="list-decimal list-inside mb-6 max-w-3xl">
        <li>Consulta inicial</li>
        <li>Visita a local piloto</li>
        <li>Firma de contrato</li>
        <li>Capacitación</li>
        <li>Apertura</li>
      </ol>
      {/* Aquí podrías añadir un acordeón de FAQs */}
      <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
        Solicitar entrevista
      </button>
    </section>
  )
}
