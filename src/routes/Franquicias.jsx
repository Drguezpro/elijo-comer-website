// src/routes/Franquicias.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className="w-full bg-gray-950/80 bg-marca-agua bg-fixed text-white min-h-screen px-6 lg:px-32 flex flex-col justify-center mt-16 pt-24 pb-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <p className="text-3xl sm:text-4xl lg:text-5xl text-center leading-snug">
          Sé tu propio jefe con{" "}
          <span 
            className="text-[#ce0008]" 
            style={{ fontFamily: 'LoveloLine, sans-serif' }}
          >
            ELIJO COMER
          </span>
          <span className="text-base sm:text-lg font-normal block mt-2 lg:inline lg:ml-2">
            : modelo probado, formación continua y acompañamiento personalizado.
          </span>
        </p>

        <ul className="list-disc list-inside text-base sm:text-lg lg:text-xl space-y-2 max-w-3xl mx-auto text-center sm:text-left">
          <li>Marca posicionada y en expansión.</li>
          <li>Soporte constante en gestión y marketing.</li>
          <li>Recetas exclusivas, insumos seleccionados y diseño cuidado.</li>
        </ul>

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">¿Cómo es el proceso?</h3>
          <ol className="list-decimal list-inside space-y-2 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-left">
            <li>Consulta inicial y presentación del modelo.</li>
            <li>Visita al local piloto.</li>
            <li>Firma del contrato y planificación.</li>
            <li>Capacitación operativa y comercial.</li>
            <li>Apertura y seguimiento personalizado.</li>
          </ol>
        </div>

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">Preguntas frecuentes</h3>
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-yellow-400 rounded-lg p-4 transition duration-300 hover:bg-gray-800/60"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold text-yellow-300 text-lg sm:text-xl focus:outline-none"
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <p
                    className={`mt-2 text-white text-base sm:text-lg transition-opacity duration-300 ${
                      fadeOut ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-yellow-400 transition">
            Solicitar entrevista
          </button>
        </div>

        {/* Botón visible solo en mobile */}
        <div className="flex sm:hidden justify-start mt-10">
          <button
            onClick={handleBack}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            ← Volver
          </button>
        </div>
      </div>
    </section>
  )
}
