// src/App.jsx
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import AppContent from './AppContent'

function App() {
  const [detalle, setDetalle] = useState(null)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent detalle={detalle} setDetalle={setDetalle} />
    </BrowserRouter>
  )
}

export default App
