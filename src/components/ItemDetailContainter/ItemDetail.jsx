// ItemDetail.jsx
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // ajusta la ruta
import ItemCount from '../Item/ItemCount';
import { toast } from 'react-toastify'; // <-- Importamos React Toastify

function ItemDetail({ producto }) {
  const { addItem } = useContext(CartContext);
  const { id, nombre, precio, category } = producto;

  // Cuando hacen click en "Agregar al Carrito"
  const handleAdd = (quantityToAdd) => {
    addItem(producto, quantityToAdd);

    // Mostramos una notificación de éxito
    toast.success(`Se agregó "${nombre}" x${quantityToAdd} al carrito!`);
  };

  return (
    <div className="detail-container">
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Categoría: {category}</p>
      
      {/* Contador para seleccionar cuántos agregar */}
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
}

ItemDetail.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
  }).isRequired,
};

export default ItemDetail;
