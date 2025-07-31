// src/AppContent.jsx
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './routes/Home'
import QuienesSomos from './routes/QuienesSomos'
import ProductosSection from './components/ProductosSection'
import DetalleRubro from './components/DetalleRubro'
import Franquicias from './routes/Franquicias'
import Contacto from './routes/Contacto'
import Cin from './routes/Cin'

function AppContent({ detalle, setDetalle }) {
  const location = useLocation()

  const hideNavbarOnMobile =
    location.pathname === '/contacto' ? 'hide-navbar-mobile' : ''

  return (
    <>
      <Navbar className={hideNavbarOnMobile} />

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
    </>
  )
}

export default AppContent
