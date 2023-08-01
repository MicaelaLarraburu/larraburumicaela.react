import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const products = {
  1: {
    name: 'Mate Buenos Aires',
    description: 'El mate para tu diaria, inspirado en el barrio de la Boca',
    color: 'Negro',
    price: '$799',
  },
  2: {
    name: 'Mate Corrientes',
    description: 'El mate más elegante para compartir con amigos.',
    color: 'Blanco',
    price: '$899',
  },
  3: {
    name: 'Mate Córdoba',
    description: 'El elegido por los jóvenes.',
    color: 'Azul',
    price: '$1000',
  },
  4: {
    name: 'Bombilla',
    description: 'Va con cualquier mate.',
    color: 'Plateado',
    price: '$300',
  },

};

const getProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products[itemId];
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error.message);
        setProduct(null);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Color: {product.color}</p>
          <p>Precio: {product.price}</p>
          <p>{product.description}</p>
          <ItemCount initialCount={1} />
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

