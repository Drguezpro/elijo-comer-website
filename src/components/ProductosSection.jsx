// src/components/ProductosSection.jsx
import React from 'react'
import RubroCard from './RubroCard'

// Importá tus imágenes destacadas por rubro
import imgBurger from '../assets/productos/burgers/ClasicaDsk.png'
import imgChiken from '../assets/productos/chiken/ChikenDsk.png'
import imgWrap from '../assets/productos/wraps/WrappDsk2.png'

const rubros = [
  {
    nombre: 'Burgers',
    imagen: imgBurger,
    descripcion: 'Clásicas reinventadas: sabor casero con toque gourmet',
  },
  {
   nombre: 'Tenders',
  imagen: imgChiken,
  descripcion: 'Crujientes por fuera, tiernos por dentro. 100% pechuga'
  },
  {
    nombre: 'Wraps',
    imagen: imgWrap,
    descripcion: 'Tu opción saludable y sorprendentemente rica',
  },
]

export default function ProductosSection({ onVerMas }) {
  return (
    <section className="w-full bg-gray-950 bg-marca-agua bg-cover bg-center bg-fixed text-white py-16 px-6">
      
      <h2
        className="text-4xl md:text-4xl font-bold text-center mb-4 text-white"
        style={{ fontFamily: 'LoveloLine', color: '#ce0008', }}
        >
        Descubrí una experiencia gourmet en cada bocado
      </h2>
      <p className="text-center text-3xl text-gray-300 max-w-6xl mx-auto mb-10">
  Propuestas que combinan sabor, frescura y una identidad única. Te van a sorprender.
</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {rubros.map((rubro) => (
          <RubroCard key={rubro.nombre} rubro={rubro} onVerMas={() => onVerMas(rubro.nombre)}/>
        ))}
      </div>
    </section>
  )
}
