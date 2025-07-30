import React, { useState, useEffect } from 'react'

const slides = [
  {
    key: 'sin-culpa',
    title: '¿Por qué “cin culpa”?',
    lines: [
      'Porque cada bocado es un momento para compartir.',
      'Porque celebrar merece ser un placer auténtico.',
      'Porque animarse a sabores nuevos es atreverse.',
      'Porque un toque gourmet no pide permiso.',
    ],
  },
  {
    key: 'con-c',
    title: '¿Y por qué con “C”?',
    lines: [
      'Porque detrás de cada receta está Cin.',
      'Es el apodo de Cintia y la clave de nuestra cercanía.',
      'Quienes la conocen la llaman así desde siempre.',
      'Incorporar su “C” es invitarte a su mesa como amiga.',
    ],
  },
]

export default function CinConC() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Fade out antes de cambiar la línea
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 4300) // fade-out 700ms antes del cambio (total dura 4000)

    // Cambio de línea
    const timer = setTimeout(() => {
      setFadeOut(false)
      if (lineIndex + 1 < slides[slideIndex].lines.length) {
        setLineIndex(lineIndex + 1)
      } else {
        setLineIndex(0)
        setSlideIndex((slideIndex + 1) % slides.length)
      }
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fadeTimer)
    }
  }, [lineIndex, slideIndex])

  return (
    <section
      className="w-full bg-gray-950/80 bg-marca-agua bg-fixed text-white
                 py-24 px-6 lg:px-32 mt-8 min-h-screen flex flex-col
                 justify-center relative overflow-hidden"
    >
      <h2 className="text-6xl lg:text-7xl font-extrabold mb-8 text-center">
        {slides[slideIndex].title}
      </h2>

      <div className="h-16 sm:h-20 flex items-start justify-center overflow-hidden">
        <p
          key={`${slideIndex}-${lineIndex}`}
          className={`text-xl lg:text-3xl font-light max-w-5xl
                      mx-auto text-center
                      animate-in slide-in-from-right duration-700
                      ${fadeOut ? 'animate-out fade-out duration-700' : ''}`}
        >
          {slides[slideIndex].lines[lineIndex]}
        </p>
      </div>
    </section>
  )
}
