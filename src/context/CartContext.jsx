// CartContext.jsx
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);
    if (itemInCart) {
      setCart(cart.map((prod) => 
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const removeOne = (id) => {
    const updatedCart = cart
      .map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
      )
      .filter((prod) => prod.quantity > 0);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        removeOne,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
