// Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

function Cart() {
  const { cart, removeItem, removeOne, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          El carrito está vacío!
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Volver al Home
        </Button>
      </Container>
    );
  }

  // Calculamos el total del carrito
  const totalValue = cart.reduce(
    (acc, prod) => acc + prod.precio * prod.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      {cart.map((prod) => (
        <Card key={prod.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{prod.nombre}</Typography>
            <Typography variant="body1">Precio: ${prod.precio}</Typography>
            <Typography variant="body1">Cantidad: {prod.quantity}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeOne(prod.id)}
            >
              Quitar 1
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeItem(prod.id)}
            >
              Eliminar producto
            </Button>
          </CardActions>
        </Card>
      ))}

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">
          Total: ${totalValue}
        </Typography>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button variant="contained" color="error" onClick={clearCart}>
          Vaciar Carrito
        </Button>
        <Button variant="contained" component={Link} to="/checkout">
          Ir al Checkout
        </Button>
      </Box>
    </Container>
  );
}

export default Cart;
