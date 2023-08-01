import React from 'react';
import { Link, useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Mate Buenos Aires',
    description: 'El mate para tu diaria, inspirado en el barrio de la Boca',
    color: 'Negro',
    price: '$799',
    category: 'Mates',
  },
  {
    id: 2,
    name: 'Mate Corrientes',
    description: 'El mate más elegante para compartir con amigos.',
    color: 'Blanco',
    price: '$899',
    category: 'Mates',
  },
  {
    id: 3,
    name: 'Mate Córdoba',
    description: 'El elegido por los jóvenes.',
    color: 'Azul',
    price: '$1000',
    category: 'Mates',
  },
  {
    id: 4,
    name: 'Bombilla',
    description: 'Va con cualquier mate.',
    color: 'Plateado',
    price: '$300',
    category: 'Accesorios',
  },
  
];

const ItemListContainer = ({ greeting }) => {
  const { selectedCategory } = useParams();

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {selectedCategory && <h3>{selectedCategory}</h3>}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              <h3>{product.name}</h3>
              <p>Color: {product.color}</p>
              <p>Precio: {product.price}</p>
              <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;

