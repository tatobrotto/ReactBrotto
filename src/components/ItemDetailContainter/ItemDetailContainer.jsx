// ItemDetailContainer.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
