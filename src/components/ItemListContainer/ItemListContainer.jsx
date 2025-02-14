import './ItemListContainer.css';
import Item from '../Item/Item';

function ItemListContainer() {
  return (
    <div className="card-container">
      <Item nombre="Cuadro Fangio" precio="$ 3000" />
      <Item nombre="Cuadro Senna" precio="$ 4000" />
      <Item nombre="Cuadro Schumacher" precio="$ 3500" />
    </div>
  );
}

export default ItemListContainer;
