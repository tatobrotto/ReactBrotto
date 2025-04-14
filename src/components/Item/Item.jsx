// Item.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio, image }) {
  return (
    <div className="card">
      {/* Aquí mostramos la imagen */}
      <img 
        src={image} 
        alt={nombre} 
        className="card-img" 
      />

      <h2 className="Ctitle">{nombre}</h2>
      <h3 className="Ctext">${precio}</h3>

      {/* Link a la vista detalle */}
      <Link to={`/item/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.any,           // si no usas id local, puedes ponerlo como .any
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  image: PropTypes.string,     // Se espera que sea un string con la URL
};

export default Item;
