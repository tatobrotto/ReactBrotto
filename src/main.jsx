import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
    {/* Agregamos el contenedor para que muestre los toasts */}
    <ToastContainer />
  </CartProvider>
);

