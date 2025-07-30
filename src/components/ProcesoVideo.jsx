// src/components/ProcesoVideo.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import videoProceso from '../assets/videos/armadoBurger.mp4'
import logo from '../assets/LogoElijoComerBis.png'

export default function ProcesoVideo() {
  const frases = [
    'Pan de papa, suave y esponjoso',
    'Carne jugosa al punto justo',
    'Queso fundido, bacon crujiente, sabor auténtico',
    'Amor por lo artesanal' 
  ]

  const [idx, setIdx] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5 })
  const videoRef = useRef(null)

  // Reproduce/pausa el video según visibilidad
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [inView])

  // Avanza frases (incluye logo al final)
  useEffect(() => {
    let t
    if (idx <= frases.length) {
      t = setTimeout(() => {
        setIdx(prev => (prev + 1) % (frases.length + 1)) // +1 incluye el logo
      }, 4200)
    }
    return () => clearTimeout(t)
  }, [idx])

  return (
    <section
      ref={ref}
      id="proceso"
      className="w-full bg-gray-950 bg-marca-agua bg-cover bg-center bg-fixed py-16 px-6 text-white"
    >
      {/* Título */}
      <h2
        className="text-4xl font-bold text-center mb-8"
        style={{ fontFamily: 'LoveloLine', color: '#ce0008' }}
      >
        Behind the Scenes
      </h2>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Video */}
        <div className="w-full md:w-2/3 mx-auto">
          <video
            ref={videoRef}
            src={videoProceso}
            muted
            loop
            autoPlay
            controls
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Frase o logo */}
        <div className="space-y-4 text-center">
          {idx === frases.length ? (
            <img
              src={logo}
              alt="Logo Elijo Comer"
              className="h-64 mx-auto animate-fade-in"
            />
          ) : (
            <p
              className="text-2xl md:text-5xl font-semibold transition-opacity duration-1000 ease-in-out"
              style={{ fontFamily: 'Hardley Brush, sans-serif' }}
            >
              {frases[idx]}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
