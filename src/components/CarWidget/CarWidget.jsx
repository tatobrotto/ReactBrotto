// CarWidget.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // ajusta la ruta a tu carpeta
import './CarWidget.css';

function CarWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="CarritoBtn">
      <img
        src="./src/assets/carrito.png"
        alt="carrito de compras"
        className="carrito"
      />
      {totalItems > 0 && (
        <span className="infoCarrito">{totalItems}</span>
      )}
    </div>
  );
}

export default CarWidget;
