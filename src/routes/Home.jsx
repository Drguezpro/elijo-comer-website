import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import portada1 from '../assets/ElijoComerPortada_1.webp'
import portada2 from '../assets/ElijoComerPortada_2.webp'
import portadaMobile1 from '../assets/PortadaElijoComerMbl1.webp'
import portadaMobile2 from '../assets/PortadaElijoComerMbl2.webp'
import ProductosSection from '../components/ProductosSection'
import DetalleRubro from '../components/DetalleRubro'
import ProcesoVideo from '../components/ProcesoVideo'

export default function Home() {
  const [detalle, setDetalle] = useState(null)

  useEffect(() => {
    document.body.style.paddingTop = '0'
    return () => {
      document.body.style.paddingTop = ''
    }
  }, [])

  const slides = [
    { desktop: portada1, mobile: portadaMobile1 },
    { desktop: portada2, mobile: portadaMobile2 }
  ]

  return (
    <div className="w-screen">
      {detalle === null ? (
        <>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-screen"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-full relative">
                  {/* versión mobile */}
                  <img
                    src={slide.mobile}
                    alt={`Portada móvil ${idx + 1}`}
                    className="block md:hidden object-cover w-full h-full"
                  />
                  {/* versión desktop */}
                  <img
                    src={slide.desktop}
                    alt={`Portada ${idx + 1}`}
                    className="hidden md:block object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <ProductosSection onVerMas={setDetalle} />

          <ProcesoVideo />
        </>
      ) : (
        <DetalleRubro rubro={detalle} onBack={() => setDetalle(null)} />
      )}
    </div>
  )
}
