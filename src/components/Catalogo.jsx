import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  // Lista de productos en el catálogo.
  const productos = [
    { id: 1, nombre: 'Mate Nahuel', precio: 150 },
    { id: 2, nombre: 'Mate Pionero', precio: 120 },
    { id: 3, nombre: 'Mate Brc', precio: 180 },
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/item/${producto.id}`}>{producto.nombre}</Link>
            <p>Precio: ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;
