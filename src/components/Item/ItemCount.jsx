// ItemCount.jsx
import { useState } from 'react';

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <button onClick={handleDecrement}>-</button>
      <span style={{ margin: "0 1rem" }}>{quantity}</span>
      <button onClick={handleIncrement}>+</button>

      <div>
        <button onClick={() => onAdd(quantity)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
