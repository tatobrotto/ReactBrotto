import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio }) {
  
  function comprar() {
    console.log("Vas a agregar al carrito el cuadro:", nombre);
  }

  return (
    <div className="card">
      <h2 className="Ctitle">{nombre}</h2>
      <h3 className="Ctext">{precio}</h3>
      
      {}
      <button className="btn" onClick={comprar}>
        Comprar
      </button>

      {}
      <Link to={`/item/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

Item.propTypes = {
  
  id: PropTypes.number.isRequired,

  
  nombre: PropTypes.string.isRequired,

  
  precio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Item;
