import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import portada1 from '../assets/ElijoComerPortada_1.png'
import portada2 from '../assets/ElijoComerPortada_2.png'
import ProductosSection from '../components/ProductosSection'


export default function Home() {
  useEffect(() => {
    document.body.style.paddingTop = '0'
    return () => {
      document.body.style.paddingTop = ''
    }
  }, [])

  return (
    <div className="w-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-screen"
      >
        {[portada1, portada2].map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Portada ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ProductosSection />
    </div>
  )
}
