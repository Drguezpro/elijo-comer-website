import React from 'react'
import QSomosImg from '../assets/QSomosElijoComer.png';

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
      tenemos...
    </span>
  </h1>

  <p className="text-xl lg:text-3xl text-gray-200">
    Pasión por el sabor, compromiso con la calidad y ganas de crecer juntos.
  </p>
</div>


      {/* Misión / Visión / Valores */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: '🔥', title: 'Misión', text: 'Ofrecer experiencias gastronómicas gourmet sin culpa.' },
          { icon: '🌟', title: 'Visión', text: 'Ser líderes en franquicias de comida rápida saludable.' },
          { icon: '🤝', title: 'Valores', text: 'Compromiso, calidad, sustentabilidad y trabajo local.' },
        ].map(({ icon, title, text }) => (
          <div
            key={title}
            className="bg-gray-800/80 p-8 rounded-2xl shadow-xl text-center animate-fade-in"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{text}</p>
          </div>
        ))}
      </div>

      {/* Sección sobre nosotros en dos columnas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p>
            Desde nuestros inicios en 2024, nos propusimos llevar un menú innovador a cada mesa, 
            cuidando ingredientes y procesos. Hoy, con dos locales propios, buscamos expandir 
            nuestra familia mediante franquicias sólidas.
          </p>
          <p>
            Cada receta, desde nuestras papas crocantes hasta el blend exclusivo de carnes, 
            está diseñada para que disfrutes sin remordimientos y con la confianza de 
            un estándar profesional.
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
