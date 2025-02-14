import './CarWidget.css';

function CarWidget() {
  return (
    <div className="CarritoBtn">
      <img
        src="./src/assets/carrito.png"
        alt="carrito de compras"
        className="carrito"
      />
      <span className="infoCarrito">4</span>
    </div>
  );
}

export default CarWidget;
