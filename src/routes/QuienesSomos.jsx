import React from 'react'
import QSomosImg from '../assets/QSomosElijoComer.png'
import MisionIcon from '../assets/IconQuienesSomos/Misión.png'
import VisionIcon from '../assets/IconQuienesSomos/Visión.png'
import ValoresIcon from '../assets/IconQuienesSomos/Valores.png'

const iconMap = {
  Misión: MisionIcon,
  Visión: VisionIcon,
  Valores: ValoresIcon,
}

export default function QuienesSomos() {
  return (
    <section className="w-full bg-gray-950/80 text-white py-24 px-6 lg:px-32 bg-marca-agua bg-fixed mt-8">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
        <h1 className="text-5xl lg:text-6xl mb-4 text-center">
          <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>
            en{" "}
          </span>
          <span style={{ fontFamily: 'LoveloLine, sans-serif', color: '#ce0008' }}>
            ELIJO COMER{" "}
          </span>
          <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>
            somos...
          </span>
        </h1>
        <p className="text-xl lg:text-3xl text-gray-200">
          Apasionados por el sabor, tenemos compromiso con la calidad y ganas de crecer juntos.
        </p>
      </div>

      {/* Misión / Visión / Valores */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: 'Misión',
            text: 'Trabajamos por y para nuestros clientes, cuidando la calidad en lo que hacemos, para que siempre puedan elegirnos con confianza y tranquilidad',
          },
          {
            title: 'Visión',
            text: 'Soñamos con seguir creciendo, expandir la marca y dar oportunidades reales a quienes comparten nuestro compromiso, sin perder nunca lo que nos hace únicos: la calidad y el buen servicio',
          },
          {
            title: 'Valores',
            text: 'Creemos en hacer las cosas con compromiso y calidad, brindando un servicio que esté a la altura de quienes nos eligen. Apostamos al trabajo local, al cuidado del medioambiente y al reciclaje como parte de una forma de trabajar más consciente y sustentable',
          },
        ].map(({ title, text }) => (
          <div
            key={title}
            className="bg-gray-800/80 p-8 rounded-2xl shadow-xl text-center animate-fade-in"
          >
            <div className="mb-4">
              <img
                src={iconMap[title]}
                alt={`Icono ${title}`}
                className="mx-auto w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{text}</p>
          </div>
        ))}
      </div>

      {/* Sección sobre nosotros en dos columnas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg lg:text-xl">
            Desde nuestros inicios en 2024, nos propusimos llevar un menú innovador a cada mesa, 
            cuidando ingredientes y procesos. Hoy, con dos locales propios, buscamos expandir 
            nuestra familia mediante <strong className="font-bold">franquicias sólidas</strong>.
          </p>
          <p className="text-lg lg:text-xl">
            Cada receta, desde nuestras papas crocantes hasta el blend exclusivo de carnes, 
            está diseñada para que disfrutes sin remordimientos y con la confianza de 
            un <strong className="font-bold">estándar profesional</strong>.
          </p>
        </div>

        <div className="animate-fade-in">
          <img
            src={QSomosImg}
            alt="Equipo Elijo Comer"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-20">
        {[
          { num: '2', label: 'Locales Propios' },
          { num: '10K+', label: 'Clientes Felices' },
          { num: '100%', label: 'Satisfacción' },
        ].map(({ num, label }) => (
          <div key={label} className="animate-fade-in">
            <div className="text-5xl font-extrabold mb-2">{num}</div>
            <p className="text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
