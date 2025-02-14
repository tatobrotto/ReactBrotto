import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

function Navbar() {
  return (
    <header>
      <nav className="menu">
        <img
          src="./src/assets/logo.png"
          alt="Logo de tienda de cuadros de automovilismo"
          className="logo"
        />
        <ul className="opciones">
          <li className="opciones-items">Inicio</li>
          <li className="opciones-items">Catálogo</li>
          <li className="opciones-items">Sobre Nosotros</li>
          <li className="opciones-items">Contacto</li>
        </ul>
        <CarWidget />
      </nav>
    </header>
  );
}

export default Navbar;
