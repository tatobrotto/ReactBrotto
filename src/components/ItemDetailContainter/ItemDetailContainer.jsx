import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  
  const productos = [
    // Categoría: F1
    { id: 1, nombre: 'Cuadro Fangio', precio: 3000, category: 'F1' },
    { id: 2, nombre: 'Cuadro Senna', precio: 4000, category: 'F1' },
    { id: 3, nombre: 'Cuadro Schumacher', precio: 3500, category: 'F1' },
    { id: 4, nombre: 'Cuadro Prost', precio: 4000, category: 'F1' },
    { id: 5, nombre: 'Cuadro Hamilton', precio: 5000, category: 'F1' },

    // Categoría: rally
    { id: 6, nombre: 'Cuadro Loeb', precio: 4200, category: 'rally' },
    { id: 7, nombre: 'Cuadro Ogier', precio: 3800, category: 'rally' },
    { id: 8, nombre: 'Cuadro McRae', precio: 3900, category: 'rally' },

    // Categoría: motoGP
    { id: 9, nombre: 'Cuadro Rossi', precio: 6000, category: 'motoGP' },
    { id: 10, nombre: 'Cuadro Márquez', precio: 5500, category: 'motoGP' },

    // Categoría: endurance
    { id: 11, nombre: 'Cuadro Toyota Le Mans', precio: 6200, category: 'endurance' },
    { id: 12, nombre: 'Cuadro Porsche 919', precio: 7000, category: 'endurance' },
  ];

  useEffect(() => {
    
    const getProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    getProducto.then((res) => {
      // Buscamos el producto cuyo ID coincida con itemId
      const foundProduct = res.find((prod) => prod.id === parseInt(itemId));
      setProduct(foundProduct);
    });
  }, [itemId]);

  return (
    <div>
      {product ? (
        <ItemDetail producto={product} />
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
