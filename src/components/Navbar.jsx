import { Link } from 'react-router-dom'
import logo from '../assets/LogoElijoComerBlack.png'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-yellow-400 flex items-center justify-between px-6 py-3 z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo Elijo Comer" className="h-20" />
        </Link>
        <h1
          className="ml-3 text-2xl text-white"
          style={{
            fontFamily: 'LoveloLine, sans-serif',
            color: '#ce0008',
          }}
        >
          ELIJO COMER
        </h1>
        <span
            style={{ fontFamily: 'Bree Serif', color: '#bf170a' }}
            className="text-2xl hidden sm:inline ml-2"
          >
            Cin Culpa
        </span>

      </div>

      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        <li><Link to="/" className="hover:text-yellow-300">Inicio</Link></li>
        <li><Link to="/productos" className="hover:text-yellow-300">Productos</Link></li>
        <li><Link to="/quienes-somos" className="hover:text-yellow-300">Quiénes Somos</Link></li>
        <li><Link to="/franquicias" className="hover:text-yellow-300">Franquicias</Link></li>
        <li><Link to="/contacto" className="hover:text-yellow-300">Contacto</Link></li>
      </ul>

      <Link
        to="/asociate"
        className="text-white px-4 py-2 rounded hover:bg-red-700 transition"
        style={{ backgroundColor: '#ce0008' }}
      >
        Asociate
      </Link>
    </nav>
  )
}
