import PropTypes from 'prop-types';

function ItemDetail({ producto }) {
  
  const { nombre, precio, category } = producto;

  return (
    <div className="detail-container">
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Categoría: {category}</p>
      {}
    </div>
  );
}

ItemDetail.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default ItemDetail;
