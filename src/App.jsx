import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './routes/Home'
import QuienesSomos from './routes/QuienesSomos'
import ProductosSection from './components/ProductosSection'
import DetalleRubro from './components/DetalleRubro'
import Franquicias from './routes/Franquicias'
import Contacto from './routes/Contacto'
import Cin from './routes/Cin'

function App() {
  const [detalle, setDetalle] = useState(null)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            detalle === null ? (
              <Home onVerMas={setDetalle} />
            ) : (
              <DetalleRubro rubro={detalle} onBack={() => setDetalle(null)} />
            )
          }
        />

        <Route
          path="/productos"
          element={
            detalle === null ? (
              <ProductosSection onVerMas={setDetalle} />
            ) : (
              <DetalleRubro rubro={detalle} onBack={() => setDetalle(null)} />
            )
          }
        />

        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/franquicias" element={<Franquicias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cin" element={<Cin />} />
        <Route
          path="*"
          element={<h2 className="pt-16 p-6">Página no encontrada</h2>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
