import React, { useState } from 'react'
import IconWhatsapp from '../assets/IconQuienesSomos/Whatsapp.png'
import IconMail from '../assets/IconQuienesSomos/Mail.png'
import IconUbicacion from '../assets/IconQuienesSomos/Ubicación.png'


export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    tipo: 'general',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: implement send logic
    console.log('Enviado:', form)
    alert('¡Mensaje enviado!')
    setForm({ nombre: '', email: '', mensaje: '', tipo: 'general' })
  }

  return (
    <section className="w-full bg-gray-950/80 bg-marca-agua bg-fixed text-white py-16 px-6 mt-16">
      {/* Hero Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-2xl flex flex-col items-center text-center">
          <img src={IconWhatsapp} alt="WhatsApp" className="w-14 h-14 mb-2" />
          <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
          <p className="text-gray-300">+54 9 11 1234-5678</p>
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition">
            Chatear ahora
          </a>
        </div>

        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-2xl flex flex-col items-center text-center">
          <img src={IconMail} alt="Correo" className="w-14 h-14 mb-2" />
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <p className="text-gray-300">contacto@elijocomer.com</p>
          <a href="mailto:contacto@elijocomer.com" className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
            Enviar correo
          </a>
        </div>

<div className="bg-gray-800 bg-opacity-60 p-6 rounded-2xl flex flex-col items-center text-center">
          <img src={IconUbicacion} alt="Ubicación" className="w-14 h-14 mb-2" />
          <h3 className="text-xl font-semibold mb-1">Ubicación</h3>
          <p className="text-gray-300">Rivadavia 821, Pilar</p>
          <a
            href="https://www.google.com/maps/place/elijo+comer+pilar+bs+as/data=!4m2!3m1!1s0x95bc9d7f7003c0df:0x139a6ba63cc1c3f6?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Ver en mapa
          </a>
        </div>

      </div>

      {/* Formulario */}
      <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 p-8 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'LoveloLine' }}>
          Envíanos tu consulta
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="relative">
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-gray-900 bg-opacity-50 p-4 rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <label htmlFor="nombre" className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Nombre
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-gray-900 bg-opacity-50 p-4 rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <label htmlFor="email" className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Email
            </label>
          </div>

          {/* Tipo de consulta */}
          <div className="relative">
            <select
              id="tipo"
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="w-full bg-gray-900 bg-opacity-50 p-4 rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="general">General</option>
              <option value="franquicia">Interés en franquicia</option>
              <option value="prensa">Prensa</option>
            </select>
            <label htmlFor="tipo" className="absolute left-4 top-2 text-gray-400 text-sm">
              Tipo de consulta
            </label>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-gray-900 bg-opacity-50 p-4 rounded text-white outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <label htmlFor="mensaje" className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Mensaje
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
