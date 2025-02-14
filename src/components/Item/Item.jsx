import PropTypes from 'prop-types';
import './Item.css';

function Item({ nombre, precio }) {
  function comprar() {
    console.log("Vas a agregar al carrito el cuadro:", nombre);
  }

  return (
    <div className="card">
      <h2 className="Ctitle">{nombre}</h2>
      <h3 className="Ctext">{precio}</h3>
      <button className="btn" onClick={comprar}>
        Comprar
      </button>
    </div>
  );
}

Item.propTypes = {
  // 'nombre' debe ser string, es requerido
  nombre: PropTypes.string.isRequired,
  // 'precio' puede ser string o número, también es requerido
  precio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired
};

export default Item;
