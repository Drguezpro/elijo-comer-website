import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-sm py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Izquierda: © y desarrollador */}
        <div className="text-center md:text-left space-y-1">
          <div>© {currentYear} Elijo Comer</div>
          <div className="mt-1 text-xs text-gray-500">
            Sitio desarrollado por{' '}
            {/* 
            <a
              href="https://paginasweb.restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              paginasweb.restaurant
            </a> 
            */}
            @parsel.studio
          </div>

        </div>

        {/* Centro: Dirección y horario */}
        <div className="text-center space-y-1">
          <div>Rivadavia 821, Pilar</div>
          <div>Williams 1370, El Talar</div>
        </div>

        <div className="text-center space-y-1">
            <p>Lun‑Mié: 11 a.m.–10 p.m.</p>
            <p>Jue‑Dom: 11 a.m.–11:30 p.m.</p>
          </div>        

        {/* Derecha: Redes sociales */}
        <div className="text-center md:text-right space-y-2">
          <div className="flex justify-center md:justify-end space-x-4 text-2xl -mt-2.5">
            <a
              href="https://instagram.com/elijo_comer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5491157295063"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div>(011) 5729‑5063 • @elijo_comer</div>
        </div>
      </div>
    </footer>
  )
}
