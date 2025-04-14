// ItemListContainer.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Referencia a la colección "productos" en Firestore
    const productosRef = collection(db, "productos");
    // Si se pasa una categoría en la URL, filtramos por esa categoría
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    // Obtenemos los documentos de la colección (o consulta filtrada)
    getDocs(q)
      .then((snapshot) => {
        const productosFirebase = snapshot.docs.map((doc) => ({
          id: doc.id, // Se utiliza el id generado automáticamente por Firestore
          ...doc.data(),
        }));
        setItems(productosFirebase);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
      {/* Sección de bienvenida e introducción */}
      <section className="welcome-section" style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Bienvenido a Nuestra Tienda de Arte</h1>
        <p>
          Explora nuestra colección de productos exclusivos. Selecciona una categoría o navega por 
          todo el catálogo para descubrir tus cuadros favoritos.
        </p>
      </section>

      {/* Sección para mostrar las tarjetas de productos */}
      <div className="card-container">
        {items.map((item) => (
          <Item
            key={item.id}           
            id={item.id}             
            nombre={item.nombre}
            precio={item.precio}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
