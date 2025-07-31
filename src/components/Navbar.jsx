import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/LogoElijoComerBlack.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Ocultar el navbar en mobile en estas rutas
  const hideNavbarOnMobileRoutes = [
    '/quienes-somos',
    '/franquicias',
    '/contacto',
    '/cin',
    '/productos'
  ]
  const shouldHideNavbarMobile = hideNavbarOnMobileRoutes.includes(location.pathname)

  // Cerrar el menú hamburguesa al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-black text-yellow-400 flex items-center justify-between px-6 py-3 z-50 ${
        shouldHideNavbarMobile ? 'hidden md:flex' : ''
      }`}
    >
      {/* Logo y título */}
      <div className={`flex items-center ${isOpen ? 'flex-col items-start' : ''}`}>
        <Link to="/">
          <img src={logo} alt="Logo Elijo Comer" className="h-20" />
        </Link>
        <h1
          className="ml-3 text-2xl"
          style={{
            fontFamily: 'LoveloLine, sans-serif',
            color: '#ce0008',
          }}
        >
          ELIJO COMER
        </h1>
        <span
          className="text-2xl hidden sm:inline ml-2"
          style={{ fontFamily: 'Bree Serif', color: '#bf170a' }}
        >
          Cin Culpa
        </span>
      </div>

      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden p-2 text-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú de navegación */}
      <ul
        className={`${
          isOpen ? 'flex flex-col items-center space-y-4 pb-4' : 'hidden'
        } md:flex md:flex-row md:space-x-8 md:items-center md:pb-0 text-lg font-semibold bg-black md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link to="/" className="hover:text-yellow-300">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className="hover:text-yellow-300">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/quienes-somos" className="hover:text-yellow-300">
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link to="/cin" className="hover:text-yellow-300">
            Cin con "C"
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-yellow-300">
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to="/franquicias"
            className="text-white px-4 py-2 rounded hover:bg-red-700 transition"
            style={{ backgroundColor: '#ce0008' }}
          >
            Franquicias
          </Link>
        </li>
      </ul>
    </nav>
  )
}
