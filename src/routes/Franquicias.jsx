// src/routes/Franquicias.jsx
import React, { useState, useEffect } from 'react'

const faqs = [
  {
    question: '¿Qué incluye el soporte inicial?',
    answer: 'Incluye formación completa, asistencia en la apertura y materiales promocionales.',
  },
  {
    question: '¿Necesito experiencia previa en gastronomía?',
    answer: 'No, te capacitamos integralmente. Lo más importante es tu compromiso con la marca.',
  },
  {
    question: '¿Cuál es el tiempo estimado de apertura?',
    answer: 'Desde la firma del contrato, estimamos entre 60 y 90 días.',
  },
]

export default function Franquicias() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [fadeOut, setFadeOut] = useState(false)

  const toggleFAQ = (index) => {
    setFadeOut(true)
    setTimeout(() => {
      setActiveIndex(index === activeIndex ? null : index)
      setFadeOut(false)
    }, 200)
  }

  return (
    <section className="w-full bg-gray-950/80 bg-marca-agua bg-fixed text-white min-h-screen py-24 px-6 lg:px-32 flex flex-col justify-center mt-16">
      <div className="max-w-5xl mx-auto">
        
        <p className="text-5xl lg:text-4xl mb-4 text-center max-w-full mx-auto">
          Sé tu propio jefe con{" "}
          <span 
          className="text-5xl"
          style={{ fontFamily: 'LoveloLine, sans-serif', color: '#ce0008' }}>
            ELIJO COMER{" "}
          </span>
          <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>
            : modelo probado, formación continua y acompañamiento personalizado.
          </span>
        </p>



        <ul className="list-disc list-inside mb-12 text-base lg:text-xl space-y-2 max-w-3xl mx-auto">
          <li>Marca posicionada y en expansión.</li>
          <li>Soporte constante en gestión y marketing.</li>
          <li>Recetas exclusivas, insumos seleccionados y diseño cuidado.</li>
        </ul>

        <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">¿Cómo es el proceso?</h3>
        <ol className="list-decimal list-inside mb-14 space-y-2 max-w-3xl mx-auto text-base lg:text-xl">
          <li>Consulta inicial y presentación del modelo.</li>
          <li>Visita al local piloto.</li>
          <li>Firma del contrato y planificación.</li>
          <li>Capacitación operativa y comercial.</li>
          <li>Apertura y seguimiento personalizado.</li>
        </ol>

        <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">Preguntas frecuentes</h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-yellow-400 rounded-lg p-4 transition duration-300 hover:bg-gray-800/60"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold text-yellow-300 text-xl focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p
                  className={`mt-2 text-lg text-white transition-opacity duration-300 ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-yellow-400 transition">
            Solicitar entrevista
          </button>
        </div>
      </div>
    </section>
  )
}
