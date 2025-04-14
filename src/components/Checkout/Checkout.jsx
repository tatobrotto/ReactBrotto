// Checkout.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

// Importamos componentes de MUI
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert
} from '@mui/material';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  // Estado para los datos del usuario
  const [buyer, setBuyer] = useState({
    nombre: '',
    email: '',
    tel: '',
  });

  // Estado para manejar la orden generada
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');

  // Maneja cambios en los inputs
  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  // Envía la orden a Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!buyer.nombre || !buyer.email) {
      setError('Completa al menos nombre y email');
      return;
    }

    // Armamos el objeto "orden"
    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0),
      date: new Date(),
    };

    try {
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, order);

      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.log(err);
      setError('Ocurrió un error al generar la orden');
    }
  };

  // Si la orden ya se generó, mostramos su ID
  if (orderId) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          ¡Gracias por tu compra!
        </Typography>
        <Typography>
          Tu número de orden es: <strong>{orderId}</strong>
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Completa tus datos para finalizar la compra
      </Typography>

      {/* Si hay un error, mostramos un Alert de MUI */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={buyer.nombre}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={buyer.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Teléfono"
          name="tel"
          value={buyer.tel}
          onChange={handleInputChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Confirmar Compra
        </Button>
      </Box>
    </Container>
  );
}

export default Checkout;
