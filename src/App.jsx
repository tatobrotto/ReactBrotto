import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainter/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Ruta principal (muestra todos los productos) */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Ruta para mostrar productos filtrados por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta para detalle de un producto particular */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {}
        <Route path="/contact" element={<h2>Página de contacto (ejemplo)</h2>} />

        {/* Ruta 404 */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
