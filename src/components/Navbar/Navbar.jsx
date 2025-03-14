

// Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

function Navbar() {
  return (
    <header>
      <nav className="menu">
        {}
        <Link to="/">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className="logo"
          />
        </Link>

        <ul className="opciones">
          <li className="opciones-items">
            <Link to="/">Inicio</Link>
          </li>
          <li className="opciones-items">
            <Link to="/category/F1">F1</Link>
          </li>
          <li className="opciones-items">
            <Link to="/category/rally">Rally</Link>
          </li>
          <li className="opciones-items">
            <Link to="/category/motoGP">MotoGP</Link>
          </li>
          <li className="opciones-items">
            <Link to="/category/endurance">Endurance</Link>
          </li>
          <li className="opciones-items">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <CarWidget />
      </nav>
    </header>
  );
}

export default Navbar;
