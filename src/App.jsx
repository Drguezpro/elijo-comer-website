import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'

import QuienesSomos from './routes/QuienesSomos'
import Productos from './routes/Productos'
import Franquicias from './routes/Franquicias'
import Contacto from './routes/Contacto'
import ProductosSection from './components/ProductosSection'
import Cin from './routes/Cin'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<ProductosSection />} />
        <Route path="/franquicias" element={<Franquicias />} />
        <Route path="/contacto" element={<Footer />} />
        <Route path="/cin" element={<Cin />} />
        <Route path="*" element={<h2 className="pt-16 p-6">Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
