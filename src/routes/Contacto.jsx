// 4. src/routes/Contacto.jsx
import React from 'react'

export default function Contacto() {
  return (
    <section className="w-full bg-gray-950/80 text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'LoveloLine' }}>
        Contacto
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <p><strong>Dirección:</strong> Rivadavia 821, Pilar</p>
          <p><strong>Tel/WhatsApp:</strong> +54 9 11 1234-5678</p>
          <p><strong>Email:</strong> contacto@elijocomer.com</p>
        </div>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Nombre" className="p-2 rounded bg-gray-800" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-800" />
          <textarea placeholder="Mensaje" className="p-2 rounded bg-gray-800 h-32" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Soy interés en franquicia</span>
          </label>
          <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
